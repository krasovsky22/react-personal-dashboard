import io from 'socket.io-client'
import axios from 'axios'

const socketUrl = 'http://localhost:3231'

export default class ChatService {
  socket = null

  constructor (props) {
    this.socket = null
    this.props = props
  }

  addListener = (type, action) => {
    this.socket.on(type, () => {
      switch (type) {
        case 'connect_error':
          this.socket.destroy()
          this.props.throwAlert({ type: 'danger', message: 'Unable to connect Chat Server' })
          break

        case 'connect':
          this.props.throwAlert({ type: 'success', message: 'successfully connected' })
          break

        default:
          console.warn(`Unable to handle type ${type}`)
          break
      }
    })
  }

  async connectToChat () {
    try {
      this.socket = io(socketUrl)
      this.addListener('connect_error', this.props.throwAlert)
      this.addListener('connect')

      return { success: true }
    } catch (error) {
      console.error(error)
      return { success: false, error: error }
    }
  }

  sendMessage (message) {
    this.socket.emit('new_message', message)
  }
}
