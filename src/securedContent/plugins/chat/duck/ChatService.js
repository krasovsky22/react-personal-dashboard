import io from 'socket.io-client'
import axios from 'axios'

import * as SERVER_EVENTS from '~server/events'

var patch = require('socketio-wildcard')(io.Manager)

const socketUrl = 'http://localhost:3231'

export default class ChatService {
  socket = null
  username = null

  addListener = (type, action) => {
    this.socket.on(type, data => {
      console.warn('detected socket server type:', type, data)
      switch (type) {
        case 'connect_error':
          this.socket.destroy()
          action({ type: 'danger', message: 'Unable to connect Chat Server' })
          break

        case 'connect':
          this.props.throwAlert({ type: 'success', message: 'Successfully Connected to Chat Server' })
          break

        case SERVER_EVENTS.CONNECTED:
          this.initializeUser()
          break
        case SERVER_EVENTS.INITIALIZATION_COMPLETED:
          console.warn('socket initialization copmleted:', data)
          break
        case SERVER_EVENTS.NEW_MESSAGE:
          action(data)
          break
        default:
          console.warn(`Unable to handle event type ${type}`)
          break
      }
    })
  }

  connectToChat = function (user) {
    this.socket = io(socketUrl)

    patch(this.socket)
    this.username = user
    this.socket.on('*', data => {
      console.log('socket data', data)
    })

    this.socket.on('connect', data => {
      console.log('CONNECT', data)
    })

    this.socket.on('connect_error', data => {
      console.log('connect_error', data)
    })

    //declare events
    // this.addListener('connect_error', this.props.throwAlert)
    // this.addListener('connect') //will trigger initialize user
    // this.addListener(SERVER_EVENTS.CONNECTED)
    // this.addListener(SERVER_EVENTS.INITIALIZATION_COMPLETED)
    // this.addListener(SERVER_EVENTS.USER_ALREADY_CONNECTED)
    // this.addListener(SERVER_EVENTS.NEW_MESSAGE, this.props.PublishMessageAction)
    // this.addListener('test_event', this.props.InitializeChatAction)

    return true
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
