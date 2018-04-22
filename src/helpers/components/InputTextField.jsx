import React from 'react'
import { Input } from 'reactstrap'

const InputTextField = props => {
  const { type, input, placeholder } = props

  return <Input {...input} type={type} placeholder={placeholder} autoComplete="false" />
}

export default InputTextField
