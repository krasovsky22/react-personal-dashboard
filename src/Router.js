import React from "react";
import { Route, Link } from "react-router-dom";
import Home from "./containers/home";
import About from "./containers/about";
import Test from "./containers/test";
import Login from "./login/LoginContainer";
import AppBar from "material-ui/AppBar";

const App = () => (
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
    </main>
  </div>
);

export default App;
