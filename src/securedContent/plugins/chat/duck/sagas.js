import { put, take, takeEvery, call, race } from 'redux-saga/effects'
import { eventChannel } from 'redux-saga'
import { INIT_CHAT_CONNECTION, SEND_MESSAGE, DISCONNECT } from './reducers'
import io from 'socket.io-client'
import axios from 'axios'

import * as SERVER_EVENTS from '~server/events'
import ChatService from './ChatService'

var patch = require('socketio-wildcard')(io.Manager)
const socketUrl = 'http://localhost:3231'

function * socketEmitActions (chatService) {
  yield takeEvery(SEND_MESSAGE, ({ message }) => {
    chatService.sendMessage(message)
  })
}

export const handleChatServerResponse = function * handleChatServerResponse (store) {
  while (true) {
    const { username } = yield take(INIT_CHAT_CONNECTION)
    const chatService = new ChatService()
    chatService.connectToChat(username, store)

    //will yield events uptill disconnect is catched
    const { cancel } = yield race({
      task: [call(socketEmitActions, chatService)],
      cancel: take(DISCONNECT)
    })
    if (cancel) {
      chatService.disconnect()
    }

    // const { data } = yield take(SEND_MESSAGE)
    // chatService.sendMessage(data)
  }
}
