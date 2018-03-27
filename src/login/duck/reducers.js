import { Types as ReduxSauceTypes, createReducer } from "reduxsauce";
import Types from "./types";

export const INITIAL_STATE = {
  user: [],
  show_spinner: false,
  errors: []
};

export const processLogin = (state = INITIAL_STATE, action) => {
  return { ...state, show_spinner: true };
};

export const defaultHandler = (state = INITIAL_STATE, action) => {
  return state;
};

export const HANDLERS = {
  [Types.PROCESS_LOGIN]: processLogin,
  [ReduxSauceTypes.DEFAULT]: defaultHandler
};

export default createReducer(INITIAL_STATE, HANDLERS);
