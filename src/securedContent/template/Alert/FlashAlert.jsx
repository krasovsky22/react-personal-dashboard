import React, { Component } from 'react'
import { Redirect, Route } from 'react-router-dom'
import PropTypes from 'prop-types'

import { Alert, Container } from 'reactstrap'

export default class FlashAlert extends Component {
  static propTypes = {
    type: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired
  }

  state = { visible: true }

  onDismiss = () => {
    this.setState({ ...this.state, visible: false })
  }

  constructor (props) {
    super(props)

    setTimeout(_ => this.setState({ ...this.state, visible: false }), 5000)
  }

  render () {
    const { type, message } = this.props
    return (
      <Container fluid>
        <Alert color={type} isOpen={this.state.visible} toggle={this.onDismiss}>
          {message}
        </Alert>
      </Container>
    )
  }
}
