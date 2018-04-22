import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap'
import Sidebar from './template/Sidebar'
import Header from './template/Header'

import './template/assets/sass/dashboard.scss'

class SecuredTemplateComponent extends React.Component {
  constructor (props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      dropdownOpen: false
    }
    console.log(props)
  }

  toggle () {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    })
  }

  render () {
    const { component: Component, ...rest } = this.props
    return (
      <div className="wrapper">
        <Sidebar {...this.props} />
        <div id="main-panel" className="main-panel" ref="mainPanel">
          <Header {...this.props} />
          <div className="content">
            <Component {...rest} />
          </div>
        </div>
      </div>
    )
  }
}

export default SecuredTemplateComponent
