import React, { Component } from 'react'
import { Redirect, Route } from 'react-router-dom'
import PropTypes from 'prop-types'

import { Card, Row, Container, Col, CardHeader, CardBody } from 'reactstrap'
import GoogleMapReact from 'google-map-react'
//import MapMarker from 'google-map-react'
import Loader from '~helpers/Loader.jsx'
import MapMarker from './MapMarker'

class GoogleMapComponent extends Component {
  static propTypes = {
    center: PropTypes.array,
    zoom: PropTypes.number,
    greatPlaceCoords: PropTypes.any
  }

  static defaultProps = {
    zoom: 12,
    greatPlaceCoords: { lat: 59.724465, lng: 30.080121 }
  }

  constructor (props) {
    super(props)
    props.initializeMapData()
  }

  render () {
    const apiKey = 'AIzaSyB5tFH77L0YhqacNllkfxsnpmkxpHW-FRQ'

    console.log('current Props:', this.props)

    const { initialized, loading } = this.props.mapData

    return (
      <Row>
        <Col xl={12} md={12}>
          <Card style={{ height: '500px' }}>
            {initialized === false ? (
              <Loader active={true} message="Loading..." />
            ) : (
              <div style={{ height: 'inherit' }}>
                <Loader active={loading} message="Loading..." />
                <GoogleMapReact bootstrapURLKeys={{ key: apiKey }} defaultCenter={this.props.mapData.center} defaultZoom={this.props.zoom}>
                  <MapMarker
                    bootstrapURLKeys={{ key: apiKey }}
                    lat={33.5721655}
                    lng={-117.7280009}
                    title={'Marker'}
                    // any user props
                  >
                    Text
                  </MapMarker>
                </GoogleMapReact>
              </div>
            )}
          </Card>
        </Col>
      </Row>
    )
  }
}

export default GoogleMapComponent
