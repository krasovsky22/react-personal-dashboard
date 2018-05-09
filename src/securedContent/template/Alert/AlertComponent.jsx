import React, { Component, Fragment } from 'react'
import { Redirect, Route } from 'react-router-dom'
import PropTypes from 'prop-types'

import FlashAlert from './FlashAlert'

const AlertComponent = props => {
  const { alerts, dismissAlert } = props

  const tAlerts = alerts.map((alert, key) => {
    return <FlashAlert key={alert.uniqueKey} {...alert} dismissAlert={dismissAlert} />
  })
  return <Fragment>{tAlerts}</Fragment>
}

export default AlertComponent
