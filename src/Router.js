import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import About from './containers/about'
import Test from './containers/test'
import LoginContainer from './auth/LoginContainer'
import LogoutContainer from './auth/LogoutContainer'
import PrivateRouter from '~securedContent/PrivateRouter'
import PrivateRouteContainer from '~securedContent/PrivateRouteContainer'

const Router = () => (
  <Fragment>
    <Route exact path="/" component={About} />
    <Route exact path="/about-us" component={About} />
    <Route exact path="/test" component={Test} />
    <Route exact path="/test/:id" component={Test} />
    <Route exact path="/login" component={LoginContainer} />
    <Route exact path="/logout" component={LogoutContainer} />

    <PrivateRouter />
  </Fragment>
)

export default Router
