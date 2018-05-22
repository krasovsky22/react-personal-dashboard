import { put, takeEvery } from 'redux-saga/effects'
import ChatService from './ChatService'
import { INIT_CHAT_CONNECTION } from './reducers'

const chatService = new ChatService()

export const handleChatServerResponse = function * handleChatServerResponse (params) {
  yield takeEvery(INIT_CHAT_CONNECTION, action => {
    chatService.connectToChat(action.user)
  })
}
