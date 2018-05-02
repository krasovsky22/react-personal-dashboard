import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as qs from 'query-string'
import LogoutComponent from './LogoutComponent'
import { logout } from './duck/reducers'

const mapStateToProps = state => {
  return state.security
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      logout
    },
    dispatch
  )

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(LogoutComponent)

export default LoginContainer
