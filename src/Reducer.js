import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'
import securityReducer from './auth/duck/reducers'
import dashboardReducer from '~securedContent/Reducer'

export default combineReducers({
  routing: routerReducer,
  dashboard: dashboardReducer,
  form: formReducer,
  security: securityReducer
})
