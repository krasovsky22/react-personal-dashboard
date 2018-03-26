import React from "react";
import { Route, Link } from "react-router-dom";
import Home from "./home";
import About from "./about";
import Test from "./test";

const App = () => (
  <div>
    <header>
      <Link to="/">Home</Link>
      <Link to="/about-us">About</Link>
      <Link to="/test">Test</Link>
      <Link to="/test/2">Test2</Link>
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
      <Route exact path="/test" component={Test} />
      <Route exact path="/test/:id" component={Test} />
    </main>
  </div>
);

export default App;
