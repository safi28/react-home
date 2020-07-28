const { Router } = require("express")
const router = Router()
const config = require("../configs/config")
const { validationResult } = require("express-validator")
const { signUp, signIn, verify } = require("../controllers/auth")
const authCookie = config.development.cookie
const validations = require("../utils/validator")
const User = require("../models/User")

router.get("/user", (req, res, next) => {
  User.find()
    .then((user) => res.send(user))
    .catch((err) => res.status(500).send("Error"))
})
router.get("/user/:id", (req, res, next) => {
  const id = req.params.id
  User.findOne({ _id: id })
    .populate("products")
    .then((updatedUser) => {
      res.send(updatedUser)
    })
    .catch(next)
})
router.post("/register", validations, async (req, res) => {
  const { username, password, repeatPassword } = req.body
  const user = await User.find({ username: username })
  const status = await signUp(req, res)
  if (status) {
    res.status(200).send(user)
  }
})
router.post("/signin", validations, async (req, res) => {
  const { username, password } = req.body
  const errors = validationResult(req)
  const user = await User.findOne({ username: username })
  if (user === null) {
    return res.status(401).send("User does not exist")
  }
  const status = await signIn(req, res)
  if (status) {
    res.status(200).send(user)
  }
})

router.post('/verify', verify)
router.post("/logout", (req, res) => {
  return res.clearCookie(authCookie).send("Logout successfully")
})

module.exports = router