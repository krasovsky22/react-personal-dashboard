import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class DashboardWithId extends Component {
  render () {
    const id = this.props.match.params.id

    console.log('dashboard props', this.props)
    return <div>Dashboard Page with id: {id}</div>
  }
}
