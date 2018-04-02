import React from "react";
import TextField from "material-ui/TextField";

const LoginTextField = props => {
  const {
    type,
    input,
    floatingLabelText,
    hint,
    meta: { touched, error, warning }
  } = props;

  const errorMessage = touched && error ? error : "";
  return (
    <TextField
      {...input}
      type={type}
      hintText={hint}
      errorText={errorMessage}
      floatingLabelText={floatingLabelText}
      autoComplete="false"
    />
  );
};

export default LoginTextField;
