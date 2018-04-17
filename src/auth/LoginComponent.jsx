import React, { Component } from 'react'
import { Field, reduxForm, InjectedFormProps } from 'redux-form'
import PropTypes from 'prop-types'
import { Jumbotron, InputGroup, Alert, Modal, ModalHeader, ModalBody } from 'reactstrap'
import { PulseLoader } from 'react-spinners'
import { Redirect } from 'react-router-dom'
import LoginTextField from './LoginTextField'
import Loader from '~helpers/Loader.jsx'

import './login.scss'

const validate = values => {
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
    this.props.login(values.username, values.password)
  }

  render () {
    const username = this.props.user ? this.props.user : 'N/A'
    const { submitting, submitFailed, valid, showSpinner } = this.props

    const alert = !submitting && submitFailed ? <Alert color="danger">Login Failed</Alert> : ''

    return (
      <Modal isOpen={true}>
        <Loader active={showSpinner} />
        <ModalBody className="loginmodal-container">
          <form onSubmit={this.props.handleSubmit(this.handleMyFormSubmit)}>
            <h1>Login to Your Account</h1>
            {alert}
            <InputGroup>
              <Field name="username" component={LoginTextField} type="text" placeholder="username" />
            </InputGroup>
            <br />
            <InputGroup>
              <Field name="password" component={LoginTextField} type="password" placeholder="password" />
              {/* <RaisedButton label="Submit" primary={true} type="submit" disabled={submitting || !valid || this.props.show_spinner} /> */}
            </InputGroup>
            Logged in as:{username}
            <br />
            <input type="submit" value="Login" className="login loginmodal-submit" />
          </form>
        </ModalBody>
      </Modal>
    )
  }
}

LoginComponent.propTypes = {
  showSpinner: PropTypes.bool.isRequired,
  errors: PropTypes.array.isRequired,
  login: PropTypes.func.isRequired,
  user: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  valid: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired
}

//@ts-ignore
export default reduxForm({ form: 'login', validate })(LoginComponent)
