import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import GoogleMapComponent from './GoogleMapComponent'
import { initializeMapData, loadPins, startMoving } from './duck/reducers'

const mapStateToProps = state => ({
  mapData: state.dashboard.mapData
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      initializeMapData,
      loadPins,
      startMoving
    },
    dispatch
  )

//@ts-ignore
const GoogleMapContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(GoogleMapComponent))
export default GoogleMapContainer
