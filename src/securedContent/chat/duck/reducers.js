import io from 'socket.io-client'
import { throwAlert } from '~securedContent/TemplateActions'

export const CONNECT = 'CHAT/CONNECT'
export const DISCONNECT = 'CHAT/DISCONNECT'
export const SEND_MESSAGE = 'CHAT/SEND_MESSAGE'
export const DISPLAY_MESSAGE = 'CHAT/DISPLAY_MESSAGE'

const socketUrl = 'http://localhost:3231'

export const INITIAL_STATE = {
  socket: null,
  users: [],
  messages: []
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CONNECT:
      const newSocket = io(socketUrl)
      const users = [action.username]
      return { ...INITIAL_STATE, socket: newSocket, users }
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
