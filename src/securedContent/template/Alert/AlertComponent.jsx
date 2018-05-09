import React, { Component, Fragment } from 'react'
import { Redirect, Route } from 'react-router-dom'
import PropTypes from 'prop-types'

import FlashAlert from './FlashAlert'

const AlertComponent = ({ alerts }) => {
  const tAlerts = alerts.map(alert => {
    return <FlashAlert {...alert} />
  })
  return <Fragment>{tAlerts}</Fragment>
}

export default AlertComponent
