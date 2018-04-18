import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Card, Container, Row, Col } from 'reactstrap'

export default class DashboardComponent extends Component {
  render () {
    return (
      <div className="content">
        <Card>
          <Row>
            <Container fluid>
              <Col md={8}>
                <h1>Home</h1>
                <p>Count: {this.props.count}</p>

                <p>
                  <button onClick={this.props.increment} disabled={this.props.isIncrementing}>
                    Increment
                  </button>
                  <button onClick={this.props.incrementAsync} disabled={this.props.isIncrementing}>
                    Increment Async
                  </button>
                </p>

                <p>
                  <button onClick={this.props.decrement} disabled={this.props.isDecrementing}>
                    Decrementing
                  </button>
                  <button onClick={this.props.decrementAsync} disabled={this.props.isDecrementing}>
                    Decrement Async
                  </button>
                </p>

                <p>
                  <button onClick={() => this.props.changePage()}>Go to about page via redux</button>
                </p>
              </Col>
            </Container>
          </Row>
        </Card>
      </div>
    )
  }
}
