import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import PropTypes from "prop-types";
import RaisedButton from "material-ui/RaisedButton";
import Dialog from "material-ui/Dialog";
import LoginTextField from "./LoginTextField";

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

class LoginComponent extends Component {
  constructor(props) {
    super(props);
  }

  handleMyFormSubmit = values => {
    this.props.processLogin(values.username, values.password);
  };

  render() {
    const username = this.props.user ? this.props.user : "N/A";
    const { submitting, valid } = this.props;
    const dialogStyles = {
      width: "25%",
      maxWidth: "500px"
    };

    return (
      <Dialog
        title="Dialog With Actions"
        modal={false}
        open={true}
        contentStyle={dialogStyles}
      >
        <form onSubmit={this.props.handleSubmit(this.handleMyFormSubmit)}>
          <Field
            name="username"
            component={LoginTextField}
            type="text"
            hintText="Enter your Username"
            floatingLabelText="Username"
          />
          <br />
          <Field
            name="password"
            component={LoginTextField}
            type="password"
            hintText="Enter your Password"
            floatingLabelText="Password"
          />
          <br />
          <RaisedButton
            label="Submit"
            primary={true}
            type="submit"
            disabled={submitting || !valid || this.props.show_spinner}
          />
          Logged in as:{username}
        </form>
      </Dialog>
    );
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
};

export default reduxForm({ form: "login", validate })(LoginComponent);
