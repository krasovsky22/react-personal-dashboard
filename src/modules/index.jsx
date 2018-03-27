import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import counter from "./counter";
import test from "./test";
import loginReducer from '../login/duck/reducers'

export default combineReducers({
  routing: routerReducer,
  test,
  counter,
  login: loginReducer
});
