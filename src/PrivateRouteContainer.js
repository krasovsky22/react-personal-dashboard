import { connect } from 'react-redux'
import { loginOperations } from './auth/duck'
import PrivateRouteComponent from './PrivateRouteComponent'

const mapStateToProps = state => ({
  user: state.login.user
})

const mapDispatchToProps = dispatch => {
  const checkIfLoggedIn = () => dispatch(loginOperations.checkIfLoggedIn())

  return { checkIfLoggedIn }
}

const PrivateRouteContainer = connect(mapStateToProps, mapDispatchToProps)(PrivateRouteComponent)
export default PrivateRouteContainer
