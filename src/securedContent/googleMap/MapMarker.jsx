import React from 'react'
import PropTypes from 'prop-types'

import Marker from 'google-map-react'
import './MapMarker.scss'

const MapMarker = () => {
  return (
    <div>
      <div className="pin" />
      <div className="pulse" />
    </div>
  )
}

export default MapMarker
