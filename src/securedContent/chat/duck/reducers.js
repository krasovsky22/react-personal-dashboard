export const CONNECTED = 'CHAT/CONNECT'
export const DISCONNECT = 'CHAT/DISCONNECT'
export const SEND_MESSAGE = 'CHAT/SEND_MESSAGE'
export const DISPLAY_MESSAGE = 'CHAT/DISPLAY_MESSAGE'

export const INITIAL_STATE = {
  users: [],
  messages: []
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CONNECTED:
      const users = [action.username]
      const newState = { ...INITIAL_STATE, users }
      console.log('new State', newState)
      return newState
    case SEND_MESSAGE:
      let messages = [...state.messages]
      messages.push(action.message)
      return { ...state, messages }
    case DISCONNECT:
      return INITIAL_STATE
    default:
      return state
  }
}

export const InitializeChatAction = username => {
  return dispatch => dispatch({ type: CONNECTED, username: username })
}
export const DisconnectAction = () => {
  return dispatch => dispatch({ type: DISCONNECT })
}

export const PublishMessageAction = message => {
  return dispatch => dispatch({ type: SEND_MESSAGE, message })
}
