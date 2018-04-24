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
      <Row>
        <Col xl={8} md={8}>
          <Card>
            <CardBody>
              <h3>Profile</h3>
              <form onSubmit={this.props.handleSubmit(this.handleFormSubmit)}>
                <Row>
                  <Col xl={6} md={6}>
                    <Field type="text" name="first_name" error="" label="First Name" placeholder="First Name" component={InputTextField} />
                  </Col>
                  <Col xl={6} md={6}>
                    <Field type="text" name="last_name" label="Last Name" placeholder="Last Name" component={InputTextField} />
                  </Col>
                </Row>
                <Row>
                  <Col xl={12} md={12}>
                    <Field type="text" name="address" error="" label="Address" placeholder="Address" component={InputTextField} />
                  </Col>
                </Row>
                <Row>
                  <Col xl={4} md={4}>
                    <Field type="text" name="city" error="" label="City" placeholder="City" component={InputTextField} />
                  </Col>
                  <Col xl={4} md={4}>
                    <Field type="text" name="country" error="" label="Country" placeholder="Country" component={InputTextField} />
                  </Col>
                  <Col xl={4} md={4}>
                    <Field type="text" name="zipcode" error="" label="Postal Code" placeholder="Postal Code" component={InputTextField} />
                  </Col>
                </Row>
                <SubmitInputRight />
              </form>
            </CardBody>
          </Card>
        </Col>

        <Col xl={4} md={4}>
          <Card>
            <CardHeader>Header</CardHeader>
            <CardBody>Body</CardBody>
          </Card>
        </Col>
      </Row>
    )
  }
}

//@ts-ignore
export default reduxForm({ form: 'profile', validate })(ProfileComponent)
