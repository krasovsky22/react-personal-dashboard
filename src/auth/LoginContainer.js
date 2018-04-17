import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as qs from 'query-string'
import LoginComponent from './LoginComponent'
import { login } from './duck/reducers'

const mapStateToProps = state => {
  const { user, showSpinner, errors } = state.security
  const { search } = state.routing.location

  const { redirrectUrl } = qs.parse(search)
  return {
    user,
    showSpinner,
    errors,
    redirrectUrl
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
