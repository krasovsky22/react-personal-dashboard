import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { increment, incrementAsync, decrement, decrementAsync } from './duck/counter'
import DashboardComponent from './DashboardComponent'

const mapStateToProps = state => {
  return {
    count: state.dashboard.counter.count,
    isIncrementing: state.dashboard.counter.isIncrementing,
    isDecrementing: state.dashboard.counter.isDecrementing
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      increment,
      incrementAsync,
      decrement,
      decrementAsync,
      changePage: () => push('/about-us')
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(DashboardComponent)
