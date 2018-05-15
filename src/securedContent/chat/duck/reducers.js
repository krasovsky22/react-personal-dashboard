export const CONNECT = 'CHAT/CONNECT'
export const DISCONNECT = 'CHAT/DISCONNECT'
export const SEND_MESSAGE = 'CHAT/SEND_MESSAGE'
export const DISPLAY_MESSAGE = 'CHAT/DISPLAY_MESSAGE'

export const INITIAL_STATE = {
  users: [],
  messages: []
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CONNECT:
      const users = [action.username]
      return { ...INITIAL_STATE, users }
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

export const ConnectToChat = username => {
  return dispatch => dispatch({ type: CONNECT, username: username })
}
export const Disconnect = () => {
  return dispatch => dispatch({ type: DISCONNECT })
}

export const PublishMessage = message => {
  return dispatch => dispatch({type: SEND_MESSAGE, message})
}
