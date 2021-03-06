import io from 'socket.io-client'
import axios from 'axios'

import * as SERVER_EVENTS from './serverEvents'
import { DISPLAY_MESSAGE, DISCONNECT, CONNECTED, REFRESH_USERS } from './reducers'
import { throwAlert } from '~securedContent/TemplateActions'

var patch = require('socketio-wildcard')(io.Manager)

const socketUrl = 'http://localhost:3231'

export default class ChatService {
  socket = null
  username = null

  isConnected = false

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
          const { connectedUsernames } = data
          this.isConnected = true
          store.dispatch({ type: CONNECTED, connectedUsernames })
          break
        case SERVER_EVENTS.NEW_MESSAGE:
          store.dispatch({ type: DISPLAY_MESSAGE, data })
          break
        case SERVER_EVENTS.USER_DISCONNETED:
          store.dispatch({ type: REFRESH_USERS, connectedUsernames: data.connectedUsernames })
          break
        default:
          console.warn(`Unable to handle event type ${type}`)
          break
      }
    })

    this.socket.on('connect_error', data => {
      store.dispatch(throwAlert({ type: 'danger', message: 'Unable Connected to Chat Server' }))
      store.dispatch({ type: DISCONNECT })
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
