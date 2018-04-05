import React, { Component } from 'react'
import { Redirect, Route } from 'react-router-dom'

class PrivateRouteComponent extends Component {
  render () {
    console.log('asdasd', this.props)
    const { user, component: Component, ...rest } = this.props
    return <Route {...rest} render={props => (user !== '' ? <Component {...props} /> : <Redirect to="/login" />)} />
  }
}

export default PrivateRouteComponent
