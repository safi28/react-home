import React, { useContext, useState } from "react";
import FormLabel from "../Form";
import UserContext from "../../../ContextWrapper/User";
import authenticate from "../../../utils/auth";
import { useHistory } from "react-router-dom";

const SignInPage = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const context = useContext(UserContext)
  const history = useHistory()

  const submitHandler = async (e) => {
    e.preventDefault();
    await authenticate("http://localhost:9999/api/user/signin", {
      username, 
      password
    }, (user) => {
      context.logIn(user)
      history.push('/')
    }, (e) => {
      console.log('Error', e);
    })
  }
  return (
    <>
    <FormLabel
      onClick={submitHandler}
      title={"Good to have you Back"}
      secondTitle={"Log in to your account using email and password"}
      usernameOnChangeHandler={(e) => setUsername(e.target.value)}
      userValue={username}
      passwordOnChangeHandler={(e) => setPassword(e.target.value)}
      passValue={password}
      isRegister={false}
      btnTitle={"LOGIN"}
      textNavigator={"Does not have an account?"}
      link={"/api/user/signup"}
      navigate={"Sign up"}
      slide={"right"}
      slideText={"right-p"}
    />

    </>
  );
}
export default SignInPage;