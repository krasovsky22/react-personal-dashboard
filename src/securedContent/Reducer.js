import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import counter from './dashboard/duck/counter'
import test from '../reducers/test'

export default combineReducers({
  counter,
  test
})
