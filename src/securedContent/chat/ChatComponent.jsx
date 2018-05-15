import React from 'react'

import ChatService from './duck/ChatService'

export default class ChatComponent extends React.Component {
  constructor (props) {
    super(props)
    const { throwAlert } = props
    this.chatService = new ChatService({ throwAlert })
  }
  componentDidMount () {
    console.log('did mount')
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

  render () {
    return <div>Chat widget</div>
  }
}
