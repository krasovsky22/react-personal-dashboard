import React, { Component } from 'react'
import { Field, reduxForm, InjectedFormProps } from 'redux-form'
import PropTypes from 'prop-types'
import { InputGroup } from 'reactstrap'
import LoginTextField from './LoginTextField'

const validate = values => {
  console.log('validation values:', values)
  const errors = {}
  if (!values.username) {
    errors.username = 'Required'
  } else if (values.username.length > 15) {
    errors.username = 'Must be 15 characters or less'
  }

  if (!values.password) {
    errors.password = 'Required'
  } else if (values.password.length > 15) {
    errors.password = 'Must be 15 characters or less'
  }

  return errors
}

class LoginComponent extends Component {
  handleMyFormSubmit = values => {
    this.props.processLogin(values.username, values.password)
  }

  render () {
    const username = this.props.user ? this.props.user : 'N/A'
    const { submitting, valid } = this.props

    console.log('current', this.props)
    return (
      <form onSubmit={this.props.handleSubmit(this.handleMyFormSubmit)}>
        <InputGroup>
          <Field name="username" component={LoginTextField} type="text" placeholder="username" />
        </InputGroup>
        <br />
        <InputGroup>
          <Field name="password" component={LoginTextField} type="password" placeholder="password" />
          <br />
          {/* <RaisedButton label="Submit" primary={true} type="submit" disabled={submitting || !valid || this.props.show_spinner} /> */}
          Logged in as:{username}
        </InputGroup>
        <input type="submit" value="Login" />
      </form>
    )
  }
}

LoginComponent.propTypes = {
  show_spinner: PropTypes.bool.isRequired,
  errors: PropTypes.array.isRequired,
  processLogin: PropTypes.func.isRequired,
  user: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  valid: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired
}

//@ts-ignore
export default reduxForm({ form: 'login', validate })(LoginComponent)
