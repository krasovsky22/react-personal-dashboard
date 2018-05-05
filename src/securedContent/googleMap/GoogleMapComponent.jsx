import React, { Component } from 'react'
import { Redirect, Route } from 'react-router-dom'
import PropTypes from 'prop-types'

import { Card, Row, Container, Col, CardHeader, CardBody } from 'reactstrap'
import GoogleMapReact from 'google-map-react'
import GoogleMap from 'google-map-react'

const AnyReactComponent = ({ text }) => (
  <div
    styles={{
      position: 'relative',
      color: 'white',
      background: 'red',
      height: 40,
      width: 60,
      top: -20,
      left: -30
    }}
  >
    {text}
  </div>
)

class GoogleMapComponent extends Component {
  static propTypes = {
    center: PropTypes.array,
    zoom: PropTypes.number,
    greatPlaceCoords: PropTypes.any
  }

  static defaultProps = {
    center: [59.938043, 30.337157],
    zoom: 9,
    greatPlaceCoords: { lat: 59.724465, lng: 30.080121 }
  }

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <Row>
        <Col xl={12} md={12}>
          <Card style={{ height: '500px' }}>
            <GoogleMap bootstrapURLKeys={{ key: 'AIzaSyDVo0B9lsvbAYOmljJZlm-qmr0nTsM9vX4' }} defaultCenter={this.props.center} defaultZoom={this.props.zoom}>
              <AnyReactComponent lat={59.955413} lng={30.337844} text={'Kreyser Avrora'} />
            </GoogleMap>
          </Card>
        </Col>
      </Row>
    )
  }
}

export default GoogleMapComponent
