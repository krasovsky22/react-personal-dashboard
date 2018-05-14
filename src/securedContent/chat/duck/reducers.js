import { throwAlert } from '~securedContent/TemplateActions'
import ChatService from './ChatService'

export const CONNECT = 'CHAT/CONNECT'
export const DISCONNECT = 'CHAT/DISCONNECT'
export const SEND_MESSAGE = 'CHAT/SEND_MESSAGE'
export const DISPLAY_MESSAGE = 'CHAT/DISPLAY_MESSAGE'

export const INITIAL_STATE = {
  users: [],
  messages: []
}

const chatService = new ChatService()

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CONNECT:
      const users = [action.username]
      return { ...INITIAL_STATE, users }
    case DISCONNECT:
      return INITIAL_STATE
    default:
      return state
  }
}

export const ConnectToChat = username => {
  return dispatch => {
    chatService.connectToChat().then(data => {
      const { success, error } = data
      if (success) {
        dispatch({ type: CONNECT, username: username })
      } else {
        dispatch(throwAlert({ type: 'danger', message: error }))
      }
    })
  }
}
export const Disconnect = () => {
  return dispatch => dispatch({ type: DISCONNECT })
}
