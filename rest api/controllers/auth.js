const User = require("../models/User")
const bcrypt = require("bcrypt")
const { createToken, verifyToken } = require("../utils/jwt")
const TokenBlackList = require("../models/TokenBlackList")

const signUp = async (req, res) => {
  const { username, password } = req.body
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)
  if(username.length < 4) {
    res.status(400).json('Username chars must be more or equal by 4')
  }
  if(password.length < 6) {
    res.status(400).json('Password chars must be more or equal by 6')
  }
  new User({ username, password: hashedPassword }).save()
  res.status(200).json({ user: "user is on" })
}
const signIn = async (req, res) => {
  const { username, password } = req.body
  const user = await User.findOne({ username: username })
  const status = await bcrypt.compare(password, user.password)
  
  if (status) {
    const token = createToken({
      userID: user._id,
      username: user.username,
    })
    return res.header("Authorization", token).send(user)
  } else {
    return res.status(401).json("Password is incorrect")
  }
}
const verify = (req, res) => {
  const token = req.headers.authorization || ""
  Promise.all([verifyToken(token), TokenBlackList.findOne({ token })])
    .then(([data, blacklistToken]) => {
      if (blacklistToken) {
        return Promise.reject(new Error("blacklisted token"))
      }
      User.findById(data.userID).then((user) => {
        return res.send({
          status: true,
          user,
        })
      })
    })
    .catch((err) => {
      if (
        ["token expired", "blacklisted token", "jwt must be provided"].includes(
          err.message
        )
      ) {
        res.status(401).send("UNAUTHORIZED!")
        return
      }
      res.send({
        status: false,
      })
    })
}

module.exports = {
  signUp,
  signIn,
  verify,
}