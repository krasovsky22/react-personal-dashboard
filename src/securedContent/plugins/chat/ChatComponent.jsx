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

  constructor (props) {
    super(props)
    const { throwAlert, InitializeChatAction, PublishMessageAction } = props
  }

  contacts = ['user 1', 'user 2', 'user 3', 'user 4']

  componentDidMount () {
    //connect to chat server
    const { user } = this.props.user
    this.props.InitializeChatAction(user)
  }

  componentWillUnmount () {
    this.props.DisconnectAction()
  }

  sendMesage = () => {
    const message = this.state.inputValue

    if (message !== '') {
      this.props.SendMessageToServer(message)
      this.setState({
        inputValue: ''
      })
    }
  }

  updateInputValue = event => {
    this.setState({
      inputValue: event.target.value
    })
  }

  _handleKeyPress = event => {
    if (event.key === 'Enter') {
      this.sendMesage()
    }
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
              <Input
                type="text"
                name="message"
                className="col-md-11"
                value={this.state.inputValue}
                onChange={event => this.updateInputValue(event)}
                onKeyPress={this._handleKeyPress}
              />
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
