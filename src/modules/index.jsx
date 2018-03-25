import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import counter from "./counter";
import test from "./test";

export default combineReducers({
  routing: routerReducer,
  test,
  counter
});
