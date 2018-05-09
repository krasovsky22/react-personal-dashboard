import React, { Component } from 'react'
import { Redirect, Route } from 'react-router-dom'
import PropTypes from 'prop-types'

import { Alert, Container } from 'reactstrap'

export default class FlashAlert extends Component {
  static propTypes = {
    type: PropTypes.string.isRequired,
    uniqueKey: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    dismissAlert: PropTypes.func.isRequired
  }

  state = { visible: true }

  onDismiss = () => {
    this.props.dismissAlert(this.props.uniqueKey)
  }

  constructor (props) {
    super(props)
    setTimeout(_ => this.onDismiss(), Math.floor(Math.random() * 10000) + 1000)
  }

  render () {
    const { uniqueKey, type, message } = this.props
    return (
      <Alert key={uniqueKey} color={type} toggle={this.onDismiss}>
        {message}
      </Alert>
    )
  }
}
