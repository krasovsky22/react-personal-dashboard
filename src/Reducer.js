import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import counter from "./reducers/counter";
import test from "./reducers/test";
import loginReducer from './login/duck/reducers'

export default combineReducers({
  routing: routerReducer,
  test,
  counter,
  login: loginReducer
});
