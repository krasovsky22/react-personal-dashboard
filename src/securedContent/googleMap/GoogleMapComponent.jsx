import React, { Component } from 'react'
import { Redirect, Route } from 'react-router-dom'
import PropTypes from 'prop-types'

import { Card, Row, Container, Col, CardHeader, CardBody } from 'reactstrap'
import GoogleMapReact from 'google-map-react'
import GoogleMap from 'google-map-react'

import NavigatorService from './duck/test'

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
    zoom: 12,
    greatPlaceCoords: { lat: 59.724465, lng: 30.080121 }
  }

  componentDidMount () {
    NavigatorService.getCurrentLocation().then(coords => {
      this.setState({
        center: { lat: coords.latitude, lng: coords.longitude }
      })
    })
  }

  constructor (props) {
    super(props)
    this.state = props
  }

  render () {
    const apiKey = 'AIzaSyB5tFH77L0YhqacNllkfxsnpmkxpHW-FRQ'

    if (!this.state.center) {
      return <div>Loading Map</div>
    }

    return (
      <Row>
        <Col xl={12} md={12}>
          <Card style={{ height: '500px' }}>
            <GoogleMapReact bootstrapURLKeys={{ key: apiKey }} defaultCenter={this.state.center} defaultZoom={this.props.zoom}>
              <AnyReactComponent lat={59.955413} lng={30.337844} text={'Kreyser Avrora'} />
            </GoogleMapReact>
          </Card>
        </Col>
      </Row>
    )
  }
}

export default GoogleMapComponent
