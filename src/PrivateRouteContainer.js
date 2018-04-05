import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import PrivateRouteComponent from './PrivateRouteComponent'

const mapStateToProps = state => ({
  user: state.login.user
})

//@ts-ignore
const PrivateRouteContainer = withRouter(connect(mapStateToProps)(PrivateRouteComponent))
export default PrivateRouteContainer
