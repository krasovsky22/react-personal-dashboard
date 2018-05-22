import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './Reducer'
import { handleChatServerResponse } from '~securedContent/plugins/chat/duck/sagas'

export const history = createHistory()

const initialState = {}
const enhancers = []
const sagaMiddleware = createSagaMiddleware()
const middleware = [thunk, routerMiddleware(history), sagaMiddleware]

if (process.env.NODE_ENV === 'development') {
  middleware.push(createLogger())
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers)

const store = createStore(rootReducer, initialState, composedEnhancers)

sagaMiddleware.run(handleChatServerResponse, store)

export default store
