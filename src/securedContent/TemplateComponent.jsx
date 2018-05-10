import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap'
import Sidebar from './template/Sidebar'
import Header from './template/Header'
import AlertContainer from './template/Alert/AlertContainer'

import './template/assets/sass/dashboard.scss'

class SecuredTemplateComponent extends React.Component {
  state = {
    sidebarOpened: false
  }

  constructor (props) {
    super(props)
  }

  openSidebar = () => {
    this.setState({
      sidebarOpened: !this.state.sidebarOpened
    })
  }

  render () {
    const { component: Component, ...rest } = this.props

    const className = this.state.sidebarOpened ? 'wrapper nav-open' : 'wrapper'

    return (
      <div className={className}>
        <Sidebar {...this.props} />
        <div id="main-panel" className="main-panel" ref="mainPanel">
          <Header openSidebar={this.openSidebar} {...this.props} />
          <div className="content">
            <AlertContainer />
            <Component {...rest} />
          </div>
        </div>
      </div>
    )
  }
}

export default SecuredTemplateComponent
