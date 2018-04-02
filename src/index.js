import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import store, { history } from "./Store";
import Router from "./Router";

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <MuiThemeProvider>
        <Router />
      </MuiThemeProvider>
    </ConnectedRouter>
  </Provider>,
  document.querySelector("#root")
);
