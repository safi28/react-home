import * as yup from 'yup'

const schema = yup.object({
    username: yup
      .string("Username shoud be a string")
      .required("Username is required")
      .min(4, "Username should be more than 4 chars"),
  
    password: yup
      .string("Password must be a string")
      .required("Password is required")
      .min(6, "Password must be more than 6 chars"),
  
    repeatPassword: yup.string("Password must be a string"),
});

export default schema