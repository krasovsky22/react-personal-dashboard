import React from 'react'
import { Input, Row, Col } from 'reactstrap'

const SubmitButtonRight = props => {
  return (
    <Row>
      <Col xl={11} md={11} />
      <Col xl={1} md={11}>
        <Input type="submit" value="Save" className="btn btn-info" />
      </Col>
    </Row>
  )
}

export default SubmitButtonRight
