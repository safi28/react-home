import React from "react";
import * as yup from "yup";
import {
  useFormControl,
  getValidationsRunnerForSchema,
} from "../../../shared/hoc/withForm";
import FormLabel from "../Form";

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
  const validationsRunner = getValidationsRunnerForSchema(schema);

  const Login = ({ login, history }) => {
  const usernameFormControl = useFormControl("", validations.username);
  const passwordFormControl = useFormControl("", validations.password);
  const [serverError, setServerError] = React.useState(null);
  const submitHandler = React.useCallback(() => {
    validationsRunner({
      username: usernameFormControl.value,
      password: passwordFormControl.value,
    })
      .then((data) => {
        login(history, data).catch((error) => {
          if (typeof error === "object") {
            throw error;
          }
          setServerError(error);
        });
      })
      .catch((errors) => {
        if (errors.username) {
          usernameFormControl.setErrors(errors.username);
        }
        if (errors.password) {
          passwordFormControl.setErrors(errors.password);
        }
      });
  }, [
    usernameFormControl,
    passwordFormControl,
    setServerError,
    history,
    login,
  ]);
  return (
    <FormLabel onClick={submitHandler} title={'Good to have you Back'}
    secondTitle={'Log in to your account using email and password'}
    usernameOnChangeHandler={usernameFormControl.changeHandler}
    usernameError={usernameFormControl.errors}
    passwordOnChangeHandler={passwordFormControl.changeHandler}
    passwordError={passwordFormControl.changeHandler}
    isRegister={false}
    btnTitle={'LOGIN'} textNavigator={'Does not have an account?'}
    link={'/register'} navigate={'Sign up'} slide={'right'}
    slideText={'right-p'}
    />
  );
};
export default Login;