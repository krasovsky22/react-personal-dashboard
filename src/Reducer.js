import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { reducer as formReducer } from "redux-form";
import counter from "./reducers/counter";
import test from "./reducers/test";
import loginReducer from "./login/duck/reducers";

export default combineReducers({
  routing: routerReducer,
  form: formReducer,
  test,
  counter,
  login: loginReducer
});
