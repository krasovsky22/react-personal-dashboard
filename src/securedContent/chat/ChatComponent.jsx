import React from 'react'

export default class ChatComponent extends React.Component {
  componentDidMount () {
    //connect to chat server
    const { user } = this.props.user
    this.props.ConnectToChat(user)
  }

  render () {
    return <div>Chat widget</div>
  }
}
