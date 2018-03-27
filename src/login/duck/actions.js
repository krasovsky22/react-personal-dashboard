import { createActions } from "reduxsauce";

const { Creators, Types } = createActions(
  {
    processLogin: ["username", "password"],
    loginSuccess: ["username"],
    loginFailure: ["error"]
  },
  {}
);

export { Creators, Types };
