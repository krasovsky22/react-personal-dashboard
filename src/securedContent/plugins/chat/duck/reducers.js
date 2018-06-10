export const CONNECTED = 'CHAT/CONNECT'
export const DISCONNECT = 'CHAT/DISCONNECT'
export const DISPLAY_MESSAGE = 'CHAT/DISPLAY_MESSAGE'
export const REFRESH_USERS = 'CHAT/REFRESH_USERS'

export const INIT_CHAT_CONNECTION = 'CHAT/SAGA/INIT_CONNECTION'
export const SEND_MESSAGE = 'CHAT/SAGA/SEND_MESSAGE'

export const INITIAL_STATE = {
  users: [],
  messages: []
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CONNECTED:
    case REFRESH_USERS:
      const users = [...action.connectedUsernames]
      const newState = { ...state, users: [...new Set(users)] }
      return newState
    case DISPLAY_MESSAGE:
      let messages = [...state.messages]
      messages.unshift(action.data)
      return { ...state, messages }
    case DISCONNECT:
      return INITIAL_STATE
    default:
      return state
  }
}

export const InitializeChatAction = username => {
  return dispatch => dispatch({ type: INIT_CHAT_CONNECTION, username: username })
}
export const DisconnectAction = () => {
  return dispatch => dispatch({ type: DISCONNECT })
}

export const SendMessageToServer = message => {
  return dispatch => dispatch({ type: SEND_MESSAGE, message })
}
