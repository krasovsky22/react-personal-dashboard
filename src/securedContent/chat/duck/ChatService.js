import io from 'socket.io-client'
import axios from 'axios'

import * as SERVER_EVENTS from '~server/events'

const socketUrl = 'http://localhost:3231'

export default class ChatService {
  socket = null
  username = null

  constructor (props) {
    this.socket = null
    this.props = props
  }

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
          if (this.socket.id !== data.socketId) {
            this.socket.id = data.socketId
          }
          break
        case SERVER_EVENTS.NEW_MESSAGE:
          console.log('socket', this.socket)
          action(data)
          break
        default:
          console.warn(`Unable to handle event type ${type}`)
          break
      }
    })
  }

  connectToChat = user => {
    this.socket = io(socketUrl)
    this.username = user

    //declare events
    this.addListener('connect_error', this.props.throwAlert)
    this.addListener('connect') //will trigger initialize user
    this.addListener(SERVER_EVENTS.CONNECTED)
    this.addListener(SERVER_EVENTS.INITIALIZATION_COMPLETED)
    this.addListener(SERVER_EVENTS.USER_ALREADY_CONNECTED)
    this.addListener(SERVER_EVENTS.NEW_MESSAGE, this.props.PublishMessageAction)
    this.addListener('test_event', this.props.InitializeChatAction)
  }

  initializeUser = () => {
    this.socket.emit(SERVER_EVENTS.INITIALIZE_USER, { username: this.username, socketId: this.socket.id })
  }

  sendMessage (message) {
    this.socket.emit(SERVER_EVENTS.NEW_MESSAGE, { username: this.username, message })
  }
}
