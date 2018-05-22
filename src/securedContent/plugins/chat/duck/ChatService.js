import io from 'socket.io-client'
import axios from 'axios'

import * as SERVER_EVENTS from '~server/events'
import { DISPLAY_MESSAGE } from './reducers'
import { throwAlert } from '~securedContent/TemplateActions'

var patch = require('socketio-wildcard')(io.Manager)

const socketUrl = 'http://localhost:3231'

export default class ChatService {
  socket = null
  username = null

  connectToChat = function (user, store) {
    this.socket = io(socketUrl)

    patch(this.socket)

    this.username = user
    this.socket.on('*', response => {
      const type = response.data[0]
      const data = response.data[1]
      switch (type) {
        case SERVER_EVENTS.CONNECTED:
          this.initializeUser()
          break
        case SERVER_EVENTS.INITIALIZATION_COMPLETED:
          console.warn('socket initialization completed:')
          break
        case SERVER_EVENTS.NEW_MESSAGE:
          store.dispatch({ type: DISPLAY_MESSAGE, data })
          break
        default:
          console.warn(`Unable to handle event type ${type}`)
          break
      }
    })

    this.socket.on('connect_error', data => {
      console.log('connect_error', data)
    })

    this.socket.on('connect', () => {
      store.dispatch(throwAlert({ type: 'success', message: 'Successfully Connected to Chat Server' }))
    })
  }

  initializeUser = () => {
    this.socket.emit(SERVER_EVENTS.INITIALIZE_USER, { username: this.username })
  }

  sendMessage (message) {
    this.socket.emit(SERVER_EVENTS.NEW_MESSAGE, { username: this.username, message })
  }

  disconnect () {
    this.socket.destroy()
  }
}
