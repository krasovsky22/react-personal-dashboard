import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import counter from '../reducers/counter'
import test from '../reducers/test'

export default combineReducers({
  counter,
  test
})
