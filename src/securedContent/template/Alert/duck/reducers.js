import uuid from 'node-uuid'

export const ADD_ALERT = 'ALERTS/ADD_ALERT'
export const DISMISS_ALERT = 'ALERTS/DISMISS_ALERT'

export const INITIAL_STATE = []

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_ALERT:
      let newState = Array.from(state)
      newState.push(action.alert)
      return newState

    case DISMISS_ALERT:
      const newDismissState = Array.from(state).filter(alert => alert.uniqueKey !== action.uniqueKey)
      return newDismissState

    default:
      return INITIAL_STATE
  }
}

export const addAlert = ({ type, message }) => {
  return dispatch => {
    dispatch({
      type: ADD_ALERT,
      alert: { uniqueKey: uuid(), type, message }
    })
  }
}

export const dismissAlert = uniqueKey => {
  return dispatch => {
    dispatch({
      type: DISMISS_ALERT,
      uniqueKey
    })
  }
}
