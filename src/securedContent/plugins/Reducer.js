import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import chat from './chat/duck/reducers'

export default combineReducers({
  chat
})
