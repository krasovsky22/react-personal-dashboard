import { connect } from "react-redux";
import LoginComponent from "./LoginComponent";
import { loginOperations } from "./duck";

const mapStateToProps = state => {
  const { user, show_spinner, errors } = state.login;
  return {
    user,
    show_spinner,
    errors
  };
};

const mapDispatchToProps = dispatch => {
  const processLogin = (username, password) =>
    dispatch(loginOperations.login(username, password));

  return { processLogin };
};

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(
  LoginComponent
);

export default LoginContainer;
