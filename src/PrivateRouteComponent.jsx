import React, { Component } from 'react'
import { Redirect, Route } from 'react-router-dom'

class PrivateRouteComponent extends Component {
  constructor (props) {
    super(props)
    props.checkIfLoggedIn()
  }
  render () {
    const { user, component: Component, ...rest } = this.props
    console.log('user', user)
    const loggedIn = user !== ''
    return <Route {...rest} render={props => (loggedIn === true ? <Component {...props} /> : <Redirect to="/login" />)} />
  }
}

export default PrivateRouteComponent
