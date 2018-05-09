import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'
import securityReducer from './auth/duck/reducers'
import dashboardReducer from '~securedContent/Reducer'
import templateReducer from '~securedContent/template/Reducer'

export default combineReducers({
  routing: routerReducer,
  dashboard: dashboardReducer,
  template: templateReducer,
  form: formReducer,
  security: securityReducer
})
