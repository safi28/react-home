import React from "react"
import userService from "../../../services/user-service"
import FormLabel from "../Form"
import UserContext from "../../../ContextWrapper/User"

class SignUpPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: "",
      rePassword: "",
    }
  }
  static contextType = UserContext

  onChange = (event, type) => {
    const newState = {}
    newState[type] = event.target.value
    this.setState(newState)
  }

  submitHandler = async(e) => {
    e.preventDefault()
    const { username, password, rePassword } = this.state
    await userService.register({ username, password, rePassword }).then((user) => {
      this.props.history.push("/signin")
    })
  }
  render() {
    const { username, password, rePassword } = this.state
     return (
      <FormLabel
      onClick ={this.submitHandler}
        title={"Hi User "}
        emoji={"❤️"}
        secondTitle={"Register and get access to our great app"}
        usernameOnChangeHandler={(e) => this.onChange(e, 'username')}
        userValue={username}
        passwordOnChangeHandler={(e) => this.onChange(e, 'password')}
        passValue={password}
        isRegister={true}
        repeatPasswordOnChangeHandler={(e) => this.onChange(e, 'rePassword')}
        rePassValue={rePassword}
        btnTitle={"REGISTER"}
        textNavigator={"Already have an account?"}
        link={"/signin"}
        navigate={"Sign in"}
        slide={"right-second"}
        slideText={"right-p"}
      />
    )
  }
}
export default SignUpPage