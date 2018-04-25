import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import imagine from './assets/img/sidebar-3.jpg'
import logo from './assets/img/reactlogo.png'

import dashboardRoutes, { RoutesValues } from '~securedContent/Routes'

class Sidebar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      width: window.innerWidth
    }
  }
  activeRoute (routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? 'active' : ''
  }
  updateDimensions () {
    this.setState({ width: window.innerWidth })
  }
  componentDidMount () {
    this.updateDimensions()
    window.addEventListener('resize', this.updateDimensions.bind(this))
  }
  render () {
    const sidebarBackground = {
      backgroundImage: 'url(' + imagine + ')'
    }
    const routes = Array.from(RoutesValues(dashboardRoutes))

    const currentPath = this.props.match.path
    return (
      <div id="sidebar" className="sidebar" data-color="black" data-image={imagine}>
        <div className="sidebar-background" style={sidebarBackground} />
        <div className="logo">
          <a href="https://www.creative-tim.com" className="simple-text logo-mini">
            <div className="logo-img">
              <img src={logo} alt="logo_image" />
            </div>
          </a>
          <a href="https://www.creative-tim.com" className="simple-text logo-normal">
            Dashboard
          </a>
        </div>
        <div className="sidebar-wrapper">
          <ul className="nav">
            {routes.map((route, key) => {
              return (
                <li className={route.path === currentPath ? 'active' : ''} key={key}>
                  <NavLink to={route.path} className="nav-link" activeClassName="active">
                    <p>{route.name}</p>
                  </NavLink>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}

export default Sidebar
