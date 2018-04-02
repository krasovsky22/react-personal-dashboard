import React from 'react'
import { Input } from 'reactstrap'

const LoginTextField = props => {
  const { type, input } = props

  return <Input {...input} type={type} autoComplete="false" />
}

export default LoginTextField
