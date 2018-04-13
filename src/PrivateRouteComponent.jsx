import React, { Component } from 'react'
import { Redirect, Route } from 'react-router-dom'
import SecuredTemplateComponent from '~securedContent/TemplateComponent'

class PrivateRouteComponent extends Component {
  render () {
    const { user, component: Component, ...rest } = this.props
    return <Route {...rest} render={props => (user !== '' ? <SecuredTemplateComponent component={Component} {...props} /> : <Redirect to="/login" />)} />
  }
}

export default PrivateRouteComponent
