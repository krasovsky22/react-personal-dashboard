import React, { Component } from 'react'
import { Redirect, Route } from 'react-router-dom'
import SecuredTemplateComponent from '~securedContent/SecuredTemplateComponent'
import { PreviousMap } from 'postcss'

class PrivateRouteComponent extends Component {
  constructor (props) {
    super(props)
  }

  componentWillMount () {
    this.props.checkIfLoggedIn()
  }

  render () {
    const { security, component: Component, ...rest } = this.props
    const redirrectUrl = `/login?redirrectUrl=${window.location.pathname}`
    return (
      <Route
        {...rest}
        render={props => (security.user !== '' ? <SecuredTemplateComponent component={Component} {...props} /> : <Redirect to={redirrectUrl} />)}
      />
    )
  }
}

export default PrivateRouteComponent
