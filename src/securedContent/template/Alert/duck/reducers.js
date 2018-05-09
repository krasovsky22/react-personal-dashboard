import uuid from 'node-uuid'

export const ADD_ALERT = 'ALERTS/ADD_ALERT'
export const DISMISS_ALERT = 'ALERTS/DISMISS_ALERT'

export const INITIAL_STATE = []

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_ALERT:
      let newAlerts = Array.from(state)
      newAlerts.push(action.alert)
      return newAlerts

    case DISMISS_ALERT:
    default:
      return state
  }
}

export const addAlert = ({ type, message }) => {
  return dispatch => {
    dispatch({
      type: ADD_ALERT,
      alert: { key: uuid(), type, message }
    })
  }
}

export const dismissAlert = () => {
  return dispatch => {
    dispatch({
      type: DISMISS_ALERT
    })
  }
}
