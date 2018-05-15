import io from 'socket.io-client'
import axios from 'axios'

const socketUrl = 'http://localhost:3231'

export default class ChatService {
  socket = null

  constructor (props) {
    this.socket = null
    console.log(props)
  }

  addListener = type => {
    this.socket.on(type, () => {
      this.socket.destroy
    })
  }

  async connectToChat () {
    try {
      this.socket = io(socketUrl)

      this.addListener('connect_error')

      if (this.socket.connected === false) {
        throw 'Unable to connect to Chat Server'
      }

      return { success: true }
    } catch (error) {
      console.error(error)
      return { success: false, error: error }
    }
  }
}
