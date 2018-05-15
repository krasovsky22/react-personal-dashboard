import React from 'react'
import { Input, Button } from 'reactstrap'

import ChatService from './duck/ChatService'

export default class ChatComponent extends React.Component {
  state = {
    inputValue: ''
  }

  constructor (props) {
    super(props)
    const { throwAlert } = props
    this.chatService = new ChatService({ throwAlert })
  }

  componentDidMount () {
    //connect to chat server
    const { user } = this.props.user
    this.chatService.connectToChat().then(data => {
      const { success, error } = data
      if (success) {
        this.props.ConnectToChat(user)
      } else {
        this.props.throwAlert({ type: 'danger', message: error })
      }
    })
    this.props.ConnectToChat(user)
  }

  sendMesage = () => {
    const message = this.state.inputValue

    if (message !== '') {
      this.chatService.sendMessage(message)
    }
  }

  updateInputValue = event => {
    this.setState({
      inputValue: event.target.value
    })
  }

  render () {
    return (
      <div>
        <Input type="text" name="message" onChange={event => this.updateInputValue(event)} />
        <Button type="submit" onClick={this.sendMesage}>
          Send
        </Button>
      </div>
    )
  }
}
