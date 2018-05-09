import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import AlertComponent from './AlertComponent'
import { dismissAlert } from './duck/reducers'

const mapStateToProps = state => ({
  alerts: state.template.alerts
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      dismissAlert
    },
    dispatch
  )

//@ts-ignore
const AlertContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(AlertComponent))
export default AlertContainer
