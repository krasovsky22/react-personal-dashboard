import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import PropTypes from "prop-types";

const validate = values => {
  const errors = {};
  if (!values.username) {
    errors.username = "Required";
  } else if (values.username.length > 15) {
    errors.username = "Must be 15 characters or less";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length > 15) {
    errors.password = "Must be 15 characters or less";
  }

  return errors;
};

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
);

class LoginComponent extends Component {
  constructor(props) {
    super(props);
  }

  handleMyFormSubmit = values => {
    this.props.processLogin(values.username, values.password);
  };

  render() {
    const status = this.props.show_spinner === true ? "Loading" : "not loading";
    const user = this.props.user ? this.props.user : "N/A";
    const { submitting, valid } = this.props;
    return (
      <div>
        {status}
        <br />
        Logged in user: {user}
        <form onSubmit={this.props.handleSubmit(this.handleMyFormSubmit)}>
          <div>
            <label htmlFor="username">Username</label>
            <Field
              name="username"
              component={renderField}
              type="text"
              placeholder="Username"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <Field name="password" component="input" type="password" />
          </div>
          <button
            type="submit"
            disabled={submitting || !valid || this.props.show_spinner}
          >
            Login
          </button>
        </form>
      </div>
    );
  }
}

LoginComponent.propTypes = {
  show_spinner: PropTypes.bool.isRequired,
  user: PropTypes.array.isRequired,
  errors: PropTypes.array.isRequired,
  processLogin: PropTypes.func.isRequired
};

export default reduxForm({ form: "login", validate })(LoginComponent);
