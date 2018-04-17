import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import PrivateRouteComponent from './PrivateRouteComponent'

const mapStateToProps = state => ({
  security: state.security
})

//@ts-ignore
const PrivateRouteContainer = withRouter(connect(mapStateToProps)(PrivateRouteComponent))
export default PrivateRouteContainer
