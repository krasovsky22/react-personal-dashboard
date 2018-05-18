import React from 'react'
import { Input, Button, Row, Col } from 'reactstrap'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faPaperPlane, faUserCircle } from '@fortawesome/fontawesome-free-solid'

import ChatService from './duck/ChatService'
import './Chat.scss'

export default class ChatComponent extends React.Component {
  state = {
    inputValue: ''
  }

  chatConnected = false

  constructor (props) {
    super(props)
    const { throwAlert, InitializeChatAction, PublishMessageAction } = props
    this.chatService = new ChatService({ throwAlert, InitializeChatAction, PublishMessageAction })

    this.props.chat.messages = [
      { type: 'reply', message: 'test message 1' },
      { type: 'answer', message: 'test message 2' },
      { type: 'reply', message: 'test message 3' },
      { type: 'answer', message: 'test message 4' },
      { type: 'reply', message: 'test message 5' },
      { type: 'answer', message: 'test message 6' },
      { type: 'reply', message: 'test message 7' },
      { type: 'answer', message: 'test message 8' },
      { type: 'reply', message: 'test message 9' }
    ]
  }

  contacts = ['user 1', 'user 2', 'user 3', 'user 4']

  componentDidMount () {
    //connect to chat server
    const { user } = this.props.user
    console.log('CHAT', this.chatConnected)
    this.chatConnected = this.chatService.connectToChat(user)
  }

  componentWillUpdate (nextProps, nextState) {
    console.log('CURRENT', this.props, this.state)
    console.log('NEXT', nextProps, nextState)
    return true
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
    const Messages = this.props.chat.messages.map(({ type, message }) => (
      <div className={type}>
        <p>{message}</p>
      </div>
    ))
    const Contacts = this.contacts.map(contact => (
      <div className="contact">
        <div className="profile_image">
          <FontAwesomeIcon icon={faUserCircle} size="2x" />
        </div>
        {contact}
      </div>
    ))
    return (
      <div className="chat-container">
        <Row>
          <Col xl={3} md={3}>
            <div className="contacts container">{Contacts}</div>
          </Col>
          <Col xl={9} md={9}>
            <div className="messages">{Messages}</div>

            <div className="form-group row message-input">
              <Input type="text" name="message" className="col-md-11" onChange={event => this.updateInputValue(event)} />
              <Button className="col-md-1" type="submit" onClick={this.sendMesage}>
                <FontAwesomeIcon icon={faPaperPlane} />
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}
