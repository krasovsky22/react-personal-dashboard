import React from 'react'
import { Input, Button } from 'reactstrap'

import ChatService from './duck/ChatService'

export default class ChatComponent extends React.Component {
  state = {
    inputValue: ''
  }

  constructor (props) {
    super(props)
    const { throwAlert, InitializeChatAction, PublishMessageAction } = props
    this.chatService = new ChatService({ throwAlert, InitializeChatAction, PublishMessageAction })
  }

  componentDidMount () {
    //connect to chat server
    const { user } = this.props.user
    this.chatService.connectToChat(user)
  }

  componentWillUnmount () {
    this.chatService.disconnect()
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
    const Messages = this.props.chat.messages.map(message => <div>{message}</div>)
    return (
      <div>
        {Messages}
        <Input type="text" name="message" onChange={event => this.updateInputValue(event)} />
        <Button type="submit" onClick={this.sendMesage}>
          Send
        </Button>
      </div>
    )
  }
}
