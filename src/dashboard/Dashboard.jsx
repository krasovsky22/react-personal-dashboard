import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Dashboard extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    console.log('dashboard props', this.props)
    return <div>Dashboard Page</div>
  }
}
