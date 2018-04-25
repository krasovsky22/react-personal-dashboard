import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import { checkIfLoggedIn } from '~auth/duck/reducers'
import PrivateRouteComponent from './PrivateRouteComponent'

const mapStateToProps = state => ({
  security: state.security
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      checkIfLoggedIn
    },
    dispatch
  )

//@ts-ignore
const PrivateRouteContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(PrivateRouteComponent))
export default PrivateRouteContainer
