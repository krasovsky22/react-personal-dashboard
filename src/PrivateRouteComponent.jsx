import React, { Component } from 'react'
import { Redirect, Route } from 'react-router-dom'

class PrivateRouteComponent extends Component {
  constructor (props) {
    super(props)
    props.checkIfLoggedIn()
  }
  render () {
    const { user, component: Component, ...rest } = this.props
    return <Route {...rest} render={props => (user !== '' ? <Component {...props} /> : <Redirect to="/login" />)} />
  }
}

export default PrivateRouteComponent
