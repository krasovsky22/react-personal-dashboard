/**
 * Here, we define any logic surrounding our actions and side effects, including async logic. If an action has no surrounding logic,
 * then we simply forward them as is, like loginRequest.
 */

import { Creators } from "./actions";

const processLogin = Creators.processLogin;
const loginSuccess = Creators.loginSuccess;

const login = (username, password) => {
  return dispatch => {
    dispatch(processLogin(username, password));

    setTimeout(_ => console.log("1000"), 1000);

    dispatch(loginSuccess(username));
  };
};

export default {
  login
};
