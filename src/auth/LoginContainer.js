import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import LoginComponent from './LoginComponent'
import { login } from './duck/reducers'

const mapStateToProps = state => {
  const { user, showSpinner, errors } = state.security
  return {
    user,
    showSpinner,
    errors
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      login
    },
    dispatch
  )

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(LoginComponent)

export default LoginContainer
