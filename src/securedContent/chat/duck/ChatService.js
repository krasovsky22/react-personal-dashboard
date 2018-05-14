import io from 'socket.io-client'
import axios from 'axios'

const socketUrl = 'http://localhost:3231'

export default class ChatService {
  constructor () {
    this.socket = null
  }

  async verifyServer () {
    const response = await axios.get(socketUrl)
    console.log('asdasdasdasd')
    return response
  }

  async connectToChat () {
    try {
      const verify = await axios.get(socketUrl)
      console.log(verify)
      console.log('eeeeeeeeeeee')
      //this.socket = io(socketUrl)
      //return { success: true }
    } catch (error) {
      console.error(error)
      return { success: false, error: 'Unable to connect to chat server' }
    }
  }
}
