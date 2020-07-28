import React, { useContext, Component } from "react";
import * as yup from "yup";
import FormLabel from "../Form";
import UserContext from "../../../ContextWrapper/User";
import userService from "../../../services/user-service";

const validations = {
  username: yup
    .string()
    .required("Username is required")
    .min(4, "Username should be more than 4 chars"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be more than 6 chars"),
};
const schema = yup.object().shape(validations);

class SignInPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
    console.log(this.context);
  }
  static contextType = UserContext;

  onChange = (event, type) => {
    const newState = {};
    newState[type] = event.target.value;
    this.setState(newState);
  }
  submitHandler = async (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    await userService
      .login({ username, password })
      .then((res) => res.json())
      .then((user) => {
        this.context.logIn(user);
        console.log(this.context);
        this.props.history.push("/");
      });
  };
  render() {
    const { username, password } = this.state;
    return (
      <FormLabel
        onClick={this.submitHandler}
        title={"Good to have you Back"}
        secondTitle={"Log in to your account using email and password"}
        usernameOnChangeHandler={(e) => this.onChange(e, "username")}
        userValue={username}
        passwordOnChangeHandler={(e) => this.onChange(e, "password")}
        passValue={password}
        isRegister={false}
        btnTitle={"LOGIN"}
        textNavigator={"Does not have an account?"}
        link={"/register"}
        navigate={"Sign up"}
        slide={"right"}
        slideText={"right-p"}
      />
    );
  }
}
export default SignInPage;
