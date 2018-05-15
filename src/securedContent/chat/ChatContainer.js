import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import ChatComponent from './ChatComponent'
import { ConnectToChat } from './duck/reducers'
import { throwAlert } from '~securedContent/TemplateActions'

const mapStateToProps = state => ({
  chat: state.dashboard.chat,
  user: state.security
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      ConnectToChat,
      throwAlert
    },
    dispatch
  )

//@ts-ignore
const ChatContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(ChatComponent))
export default ChatContainer
