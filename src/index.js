import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './Store'
import Router from './Router'

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Router />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.querySelector('#root')
)