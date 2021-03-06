import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import counter from './dashboard/duck/counter'
import test from '../reducers/test'
import mapData from './googleMap/duck/reducers'
import templateData from './template/Reducer'
import plugins from './plugins/Reducer'

export default combineReducers({
  counter,
  mapData,
  test,
  templateData,
  plugins
})
