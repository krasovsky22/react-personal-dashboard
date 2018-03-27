import { connect } from 'react-redux';
import LoginComponent from "./LoginComponent";
import { loginOperations } from './duck';

const mapStateToProps = (state) => {
    const {user , show_spinner, errors} = state.login;
    return {
        user,
        show_spinner,
        errors
    }
};

const mapDispatchToProps = (dispatch) => {
    const clickLogin = (username , password) => dispatch(loginOperations.loginRequest(username, password));

    return {clickLogin};
}

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(LoginComponent);

export default LoginContainer;