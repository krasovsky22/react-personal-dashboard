import React from 'react'
import { Route, Link } from 'react-router-dom'
import Home from './containers/home'
import About from './containers/about'
import Test from './containers/test'
import Login from './auth/LoginContainer'
import Dashboard from './dashboard/Dashboard'
import PrivateRouteContainer from './PrivateRouteContainer'

const Router = () => (
  <div>
    <header>
      <Link to="/">Home</Link>
      <Link to="/about-us">About</Link>
      <Link to="/test">Test</Link>
      <Link to="/test/2">Test2</Link>
      <Link to="/login">Login</Link>
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
      <Route exact path="/test" component={Test} />
      <Route exact path="/test/:id" component={Test} />
      <Route exact path="/login" component={Login} />

      <PrivateRouteContainer path="/dashboard" component={Dashboard} />
    </main>
  </div>
)

export default Router
