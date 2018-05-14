import React from 'react'

export default class ChatComponent extends React.Component {
  componentDidMount () {
    //connect to chat server
    this.props.ConnectToChat()
  }

  render () {
    return <div>Chat widget</div>
  }
}
