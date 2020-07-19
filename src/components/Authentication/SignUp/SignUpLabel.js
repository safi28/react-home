import React from "react";
import {  Redirect } from "react-router-dom";
import userService from "../../../services/user-service";
import withForm from "../../../shared/hoc/withForm";
import FormLabel from "../Form";
import schema from "./schema";

class Form extends React.Component {
  usernameOnChangeHandler = this.props.controlChangeHandlerFactory("username");
  passwordOnChangeHandler = this.props.controlChangeHandlerFactory("password");
  repeatPasswordOnChangeHandler = this.props.controlChangeHandlerFactory(
    "repeatPassword"
  );
  submitHandler = (e) => {
    e.preventDefault()
    const errors = this.props.getFormErrorState();
    if (!!errors) {
      return;
    }
    const data = this.props.getFormState();
    userService.register(data).then(() => {
      return <Redirect to='/' />
    });
  };
  getFirstControlError = (name) => {
    const errorState = this.props.getFormErrorState();
    return errorState && errorState[name] && errorState[name][0];
  };

  render() {
    const usernameError = this.getFirstControlError("username");
    const passwordError = this.getFirstControlError("password");
    const repeatPasswordError = this.getFirstControlError("repeatPassword");
    return (
      <FormLabel onClick={this.submitHandler} title={'Hi User '}
       emoji={'❤️'} secondTitle={'Register and get access to our great app'}
       usernameOnChangeHandler={this.usernameOnChangeHandler}
       usernameError={usernameError}
        passwordOnChangeHandler={this.passwordOnChangeHandler}
        passwordError={passwordError}
        isRegister={true} repeatPasswordOnChangeHandler={repeatPasswordError}
        repeatPasswordError={repeatPasswordError}
        btnTitle={'REGISTER'} textNavigator={'Already have an account?'}
        link={'/signin'} navigate={'Sign in'} slide={'right-second'}
        slideText={'right-p'}
        />
    );
  }
}
const initialFormState = {
  username: "",
  password: "",
  repeatPassword: "",
};

export default withForm(Form, initialFormState, schema);