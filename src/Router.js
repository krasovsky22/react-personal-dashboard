import React from 'react'
import { Route, Switch } from 'react-router-dom'
import About from './containers/about'
import Test from './containers/test'
import Login from './auth/LoginContainer'
import DashboardContainer from '~securedContent/dashboard/DashboardContainer'
import DashboardWithId from '~securedContent/DashboardWithId'
import PrivateRouteContainer from './PrivateRouteContainer'

const Router = () => (
  <div>
    {/* <header>
      <Link to="/">Home</Link>
      <Link to="/about-us">About</Link>
      <Link to="/test">Test</Link>
      <Link to="/test/2">Test2</Link>

    </header> */}

    <Route exact path="/" component={About} />
    <Route exact path="/about-us" component={About} />
    <Route exact path="/test" component={Test} />
    <Route exact path="/test/:id" component={Test} />
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/logout" component={Login} />
    </Switch>

    <Switch>
      <PrivateRouteContainer exact path="/dashboard" component={DashboardContainer} />
      <PrivateRouteContainer path="/dashboard/:id" component={DashboardWithId} />
    </Switch>
  </div>
)

export default Router
