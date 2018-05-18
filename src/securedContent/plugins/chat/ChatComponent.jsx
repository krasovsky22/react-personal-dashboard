import React from 'react'
import { Input, Button, Row, Col } from 'reactstrap'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/fontawesome-free-solid'

import ChatService from './duck/ChatService'
import './Chat.scss'

export default class ChatComponent extends React.Component {
  state = {
    inputValue: ''
  }

  constructor (props) {
    super(props)
    const { throwAlert, InitializeChatAction, PublishMessageAction } = props
    this.chatService = new ChatService({ throwAlert, InitializeChatAction, PublishMessageAction })

    this.props.chat.messages = ['test message', 'test message', 'test message', 'test message', 'test message', 'test message', 'test message', 'test message']
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
    const Messages = this.props.chat.messages.map(message => <div className="replies">{message}</div>)
    return (
      <div className="chat-container">
        <Row>
          <Col xl={3} md={3}>
            <div className="contacts">Contacts here</div>
          </Col>
          <Col xl={9} md={9}>
            <div className="container messages">{Messages}</div>

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
