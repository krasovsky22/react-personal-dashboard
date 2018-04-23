import React, { Component } from 'react'
import { Card, Row, Container, Col, CardHeader, CardBody } from 'reactstrap'
import { Field, reduxForm, InjectedFormProps } from 'redux-form'
import SubmitInputRight from '~helpers/components/SubmitButtonRight'
import InputTextField from '~helpers/components/InputTextField'

const validate = values => {
  const errors = {}
  if (values.first_name !== 'vlad') {
    errors.first_name = 'Wrong First Name'
  }

  return errors
}

class ProfileComponent extends Component {
  handleFormSubmit = () => {}
  render () {
    const { errors } = this.props
    console.log(this.props, errors)
    return (
      <Col xl={8} md={8}>
        <Card>
          <CardBody>
            <h3>Profile</h3>
            <form onSubmit={this.props.handleSubmit(this.handleFormSubmit)}>
              <Row>
                <Col xl={6} md={6}>
                  <Field type="text" name="first_name" error="" label="First Name" component={InputTextField} />
                </Col>
                <Col xl={6} md={6}>
                  <Field type="text" name="last_name" label="Last Name" component={InputTextField} />
                </Col>
              </Row>
              <SubmitInputRight />
            </form>
          </CardBody>
        </Card>
      </Col>
    )
  }
}

//@ts-ignore
export default reduxForm({ form: 'profile', validate })(ProfileComponent)
