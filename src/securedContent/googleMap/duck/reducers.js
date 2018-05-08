import NavigatorService from './NavigatorService'

export const INIT_MAP_CENTER = 'GOOGLE_MAP/INIT_MAP_CENTER'
export const LOAD_MAP_PINS = 'GOOGLE_MAP/LOAD_MAP_PINS'
export const START_MOVING_PINS = 'GOOGLE_MAP/START_MOVING_PINS'
export const INIT_FAILED = 'GOOGLE_MAP/INIT_FAILED'
export const LOADING = 'GOOGLE_MAP/LOADING'

export const INITIAL_STATE = {
  center: [],
  loading: false,
  initialized: false,
  error: '',
  pins: []
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOADING:
      return { ...INITIAL_STATE, loading: true }

    case LOAD_MAP_PINS:
      return { ...state, pins: action.pins }

    case START_MOVING_PINS:
      let newPin = { ...state.pins[0] }
      newPin.lat += action.coord

      console.log('new posotion', newPin)

      return { ...state, pins: [newPin] }

    case INIT_MAP_CENTER:
      return { ...state, loading: false, initialized: true, center: action.center }

    case INIT_FAILED:
      return { ...INITIAL_STATE, error: action.error }

    default:
      return state
  }
}

export const startLoading = () => {
  return dispatch => {
    dispatch({
      type: LOADING
    })
  }
}

const fetchMapCenterData = username => {
  return async dispatch => {
    function onSuccess (coords) {
      dispatch({ type: INIT_MAP_CENTER, center: { lat: coords.latitude, lng: coords.longitude } })

      return coords
    }

    function onError (error) {
      dispatch({ type: INIT_FAILED, error: error })
      return error
    }

    try {
      const success = await NavigatorService.getCurrentLocation()
      return onSuccess(success)
    } catch (error) {
      return onError(error)
    }
  }
}

const fetchPins = () => {
  return async dispatch => {
    let pins = []
    const { latitude, longitude } = await NavigatorService.getCurrentLocation()
    pins.push({ lat: latitude, lng: longitude, text: 'Pin Name', key: 1 })
    dispatch({ type: LOAD_MAP_PINS, pins: pins })
  }
}

export const initializeMapData = username => {
  return dispatch => {
    dispatch(startLoading())

    dispatch(fetchMapCenterData(username))
    //setTimeout(_ => dispatch(fetchUserMapData(username)), 10000)
  }
}

export const loadPins = () => {
  return dispatch => {
    dispatch(fetchPins())
  }
}

export const startMoving = () => {
  return dispatch => {
    dispatch({ type: START_MOVING_PINS, coord: 0.0001 })
  }
}
