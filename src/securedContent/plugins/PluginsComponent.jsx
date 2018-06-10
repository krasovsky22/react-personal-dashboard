import React from 'react'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Button } from 'reactstrap'
import Draggable from 'react-draggable'

import './sass/plugins.scss'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faComments } from '@fortawesome/fontawesome-free-solid'
import ChatContainer from './chat/ChatContainer'

class PluginsComponent extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      open: false
    }
  }
  toggle = () => {
    this.setState({ ...this.state, open: !this.state.open })
  }

  render () {
    const dropDownMenuClasses = `dropdown-menu ${this.state.open ? 'show' : ''}`
    const dropDownClasses = `dropleft dropdown ${this.state.open ? 'show' : ''}`
    return (
      <Draggable axis="y">
        <div className="fixed-plugin">
          <div className={dropDownClasses}>
            <Button className="plugin-button" color="secondary" onClick={this.toggle}>
              <FontAwesomeIcon icon={faComments} />
            </Button>
            <div className={dropDownMenuClasses}>
              <ChatContainer />
            </div>
          </div>
        </div>
      </Draggable>
    )
  }
}

export default PluginsComponent
