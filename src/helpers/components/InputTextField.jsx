import React from 'react'
import { Input, FormGroup, Label, Alert } from 'reactstrap'
import PropTypes from 'prop-types'

const InputTextField = props => {
  const { type, id, label, input, submitting, placeholder, meta: { touched, submitFailed, error, warning } } = props

  const divId = id || input.name

  return (
    <FormGroup>
      <Label for={divId}>{label}</Label>
      {error && submitFailed && <Alert color="danger">{error}</Alert>}
      <Input {...input} type={type} placeholder={placeholder} autoComplete="false" />
    </FormGroup>
  )
}

export default InputTextField
