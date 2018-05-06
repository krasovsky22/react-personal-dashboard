import NavigatorService from './NavigatorService'

export const INIT_MAP_CENTER = 'GOOGLE_MAP/INIT_MAP_CENTER'
export const INIT_FAILED = 'GOOGLE_MAP/INIT_FAILED'
export const LOADING = 'GOOGLE_MAP/LOADING'

export const INITIAL_STATE = {
  center: [],
  loading: false,
  initialized: false,
  error: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOADING:
      return { ...INITIAL_STATE, loading: true }

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

export const initializeMapData = username => {
  return dispatch => {
    dispatch(startLoading())

    dispatch(fetchMapCenterData(username))
    //setTimeout(_ => dispatch(fetchUserMapData(username)), 10000)
  }
}
