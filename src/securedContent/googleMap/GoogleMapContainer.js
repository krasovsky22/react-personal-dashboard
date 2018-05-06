import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import GoogleMapComponent from './GoogleMapComponent'
const mapStateToProps = state => ({
  security: state.security
})

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)

//@ts-ignore
const GoogleMapContainer = withRouter(connect(null, null)(GoogleMapComponent))
export default GoogleMapContainer
