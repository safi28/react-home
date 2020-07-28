const User = require("../models/User")
const config = require("../configs/config")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const authCookie = config.development.cookie
const privateKey = config.development.privateKey

const generateToken = (data) => {
  const token = jwt.sign(data, privateKey)
  return token
}
const signUp = async (req, res) => {
  const { username, password } = req.body
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)
  new User({ username, password: hashedPassword }).save()
  res.status(200).json({ user: "user is on" })
}
const signIn = async (req, res) => {
  const { username, password } = req.body
  const user = await User.findOne({ username: username })
  const status = await bcrypt.compare(password, user.password)
  if (status) {
    const token = generateToken({
      userID: user._id,
      username: user.username,
    })
    // res.header("Authorization", token).send(user);
    res.cookie(authCookie, token).send(user)
  } else {
    res.status(500).json({ user: "error" })
  }
}
const getUsername = async (req, res, next) => {
  const token = req.cookies[authCookie]
  if (token) {
    const decodedObject = jwt.verify(token, privateKey)
    req.user = await User.findOne({ name: decodedObject.username })
  }
  next()
}
const getUserStatus = (req, res, next) => {
  const token = req.cookies[authCookie]
  if (!token) {
    req.isLoggedIn = false
  }
  try {
    jwt.verify(token, privateKey)
    req.isLoggedIn = true
  } catch (e) {
    req.isLoggedIn = false
  }
  next()
}
const authAccess = (req, res, next) => {
  const token = req.cookies[authCookie]
  if (!token) {
    return res.redirect("/")
  }
  try {
    jwt.verify(token, privateKey)
    next()
  } catch (e) {
    return res.redirect("/")
  }
}
const guestAccess = (req, res, next) => {
  const token = req.cookies[authCookie]
  if (token) {
    return res.redirect("/")
  }
  next()
}
const verify = (req, res) => {
  const token = req.cookies[authCookie]
  if (token) {
    const decodedObject = jwt.verify(token, privateKey)
    User.findById(decodedObject.userID).then((user) => {
      return res.send({
        status: true,
        user
      })
    }).catch(err => {
      res.send({
        status: false
      })
    })
  }
}
module.exports = {
  signUp,
  getUsername,
  signIn,
  getUserStatus,
  guestAccess,
  authAccess,
  verify
}
