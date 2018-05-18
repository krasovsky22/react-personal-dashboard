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
    const Messages = this.props.chat.messages.map(({type , message}) => <div className={type}>{message}</div>)
    return (
      <div className="chat-container">
        <Row>
          <Col xl={3} md={3}>
            <div className="contacts container">
              <div className="">Contacts here</div>
            </div>
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
