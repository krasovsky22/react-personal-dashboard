import io from 'socket.io-client'
import axios from 'axios'

import * as SERVER_EVENTS from '~server/events'

const socketUrl = 'http://localhost:3231'

export default class ChatService {
  socket = null
  user = null
  socketId: null

  constructor (props) {
    this.socket = null
    this.props = props
  }

  addListener = (type, action) => {
    this.socket.on(type, data => {
      console.warn('detected socker server type:', type, data)
      switch (type) {
        case 'connect_error':
          this.socket.destroy()
          action({ type: 'danger', message: 'Unable to connect Chat Server' })
          break

        case 'connect':
          this.props.throwAlert({ type: 'success', message: 'Successfully Connected to Chat Server' })
          break

        case SERVER_EVENTS.CONNECTED:
          this.socketId = data.socketId
          this.initializeUser()
          break
        default:
          console.warn(`Unable to handle event type ${type}`)
          break
      }
    })
  }

  connectToChat = user => {
    this.socket = io(socketUrl)
    this.user = user

    //declare events
    this.addListener('connect_error', this.props.throwAlert)
    this.addListener('connect') //will trigger initialize user
    this.addListener(SERVER_EVENTS.CONNECTED)
    this.addListener('test_event', this.props.InitializeChatAction)
  }

  initializeUser = () => {
    this.socket.emit(SERVER_EVENTS.INITIALIZE_USER, { username: this.user, socketId: this.socketId })
  }

  sendMessage (message) {
    this.socket.emit(SERVER_EVENTS.NEW_MESSAGE, message)
  }
}
