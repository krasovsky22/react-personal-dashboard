import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { loginOperations } from './auth/duck'
import PrivateRouteComponent from './PrivateRouteComponent'

const mapStateToProps = state => ({
  user: state.login.user
})

const mapDispatchToProps = dispatch => {
  const checkIfLoggedIn = () => dispatch(loginOperations.checkIfLoggedIn())

  return { checkIfLoggedIn }
}

const PrivateRouteContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(PrivateRouteComponent))
export default PrivateRouteContainer
