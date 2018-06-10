import React, { Component } from 'react'
import { Redirect, Route } from 'react-router-dom'
import PropTypes from 'prop-types'

import { Card, Row, Container, Col, CardHeader, CardBody, Button } from 'reactstrap'
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

  clickLocateMe = () => {
    this.props.loadPins()
  }

  startMoving = () => {
    window.setInterval(() => {
      this.props.startMoving()
    }, 100)
  }

  render () {
    const apiKey = 'AIzaSyB5tFH77L0YhqacNllkfxsnpmkxpHW-FRQ'

    const { initialized, loading, pins, error } = this.props.mapData

    const markers = pins.map(pin => {
      return <MapMarker {...pin} />
    })

    return (
      <div>
        <Row>
          <Col xl={9} md={9}>
            <Card style={{ height: '500px' }}>
              {initialized === false ? (
                <Loader active={true} message="Loading..." />
              ) : (
                <div style={{ height: 'inherit' }}>
                  <Loader active={loading} message="Loading..." />
                  <GoogleMapReact bootstrapURLKeys={{ key: apiKey }} defaultCenter={this.props.mapData.center} defaultZoom={this.props.zoom}>
                    {markers}
                  </GoogleMapReact>
                </div>
              )}
            </Card>
          </Col>
          <Col xl={3} md={9}>
            <Card>
              <CardBody>Card Body....</CardBody>
            </Card>

            <Card>
              <CardBody>Card Body2....</CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Button onClick={this.clickLocateMe}>Locate Me</Button>
          <Button onClick={this.startMoving}>Start Moving</Button>
        </Row>
      </div>
    )
  }
}

export default GoogleMapComponent
