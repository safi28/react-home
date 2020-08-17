import React, { useState } from "react"
import { useToasts } from "react-toast-notifications"
import FormLabel from "../Form"
import { useHistory } from "react-router-dom"
import userService from "../../../services/user-service"

const SignUpPage = () => {
  const { addToast } = useToasts()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [rePassword, setRePassword] = useState("")
  const history = useHistory()

  const submitHandler = async (e) => {
    e.preventDefault()

    userService.register({ username, password, rePassword }).then(res => res.json()).then((user) => {
      if(!user.user) {
        return addToast(user, {appearance: 'error'})
      }
      addToast("Register successfylly", { appearance: "success" })
      history.push("/api/user/signin")
    }).catch((e) => {
      console.log(e);
      addToast('Something is wrong try new username', { appearance: "error" })
      history.push('/api/user/signup')
    })
  }

  return (
    <FormLabel
      onClick={submitHandler}
      title={"Hi User "}
      emoji={"❤️"}
      secondTitle={"Register and get access to our great app"}
      usernameOnChangeHandler={(e) => setUsername(e.target.value)}
      userValue={username}
      passwordOnChangeHandler={(e) => setPassword(e.target.value)}
      passValue={password}
      isRegister={true}
      repeatPasswordOnChangeHandler={(e) => setRePassword(e.target.value)}
      rePassValue={rePassword}
      btnTitle={"REGISTER"}
      textNavigator={"Already have an account?"}
      link={"/api/user/signin"}
      navigate={"Sign in"}
      slide={"right-second"}
      slideText={"right-p"}
    />
  );
};

export default SignUpPage;