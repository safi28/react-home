const { body } = require("express-validator")

module.exports = [
  body("username").custom((value) => {
    let rgx = /[A-Za-z0-9 ].+/
    rgx.test(value)
    if (rgx !== null) {
      throw new Error("Username is invalid! Check for invalid chars")
    }
    return true
  }),
  body(["username", "password"]).custom((value) => {
    if (value.length < 3) {
      throw new Error(
        "Username and password should be at least 3 characters long!"
      )
    }
    return true
  }),
  body(["repeatPassword", "password"]).custom((pass, repeatPass) => {
    if (pass !== repeatPass) {
      throw new Error("Passwords do not match")
    }
    return true
  }),
]
