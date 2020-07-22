const User = require("../models/User");
const config = require("../configs/config");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const authCookie = config.development.cookie;
const privateKey = config.development.privateKey;

const generateToken = (data) => {
  const token = jwt.sign(data, privateKey);
  return token;
};
const signUp = async (req, res) => {
  const { username, password } = req.body;
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  new User({ username, password: hashedPassword }).save()
  res.status(200).json({'user': 'user is on'})
};
const signIn = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username: username });
  const status = await bcrypt.compare(password, user.password);
  if (status) {
    const token = generateToken({
      userID: user._id,
      username: user.username,
    })
    req.user = user
    res.cookie(authCookie, token).send(user)
  } else {
    res.status(500).json({'user': 'error'})
  }
}
const getUsername = async (req, res, next) => {
  const token = req.cookies[authCookie]
  if (token) {
    const decodedObject = jwt.verify(token, privateKey)
    req.user = await User.findOne({name: decodedObject.username})
  }
  next()
}
module.exports = {
  signUp,
  getUsername,
  signIn,
}