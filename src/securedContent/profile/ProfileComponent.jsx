import React, { Component } from 'react'
import { Card, Row, Container, Col, CardHeader, CardBody } from 'reactstrap'
import { Field, reduxForm, InjectedFormProps } from 'redux-form'
import SubmitInputRight from '~helpers/components/SubmitButtonRight'

class ProfileComponent extends Component {
  handleFormSubmit = () => {
    console.log('asdasd')
  }
  render () {
    return (
      <Col xl={8} md={8}>
        <Card>
          <CardBody>
            <h3>Profile</h3>
            <form onSubmit={this.props.handleSubmit(this.handleFormSubmit)}>
              asdasd
              <SubmitInputRight />
            </form>
          </CardBody>
        </Card>
      </Col>
    )
  }
}

//@ts-ignore
export default reduxForm({ form: 'profile' })(ProfileComponent)
