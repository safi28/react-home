const { Router } = require("express")
const router = Router()
const { signUp, signIn, verify } = require("../controllers/auth")
const User = require("../models/User")
const multer = require("multer")
const path = require('path')

const storage = multer.diskStorage({
  destination: "./public/",
  filename: function(req, file, cb){
     cb(null,"IMAGE-" + Date.now() + path.extname(file.originalname))
  }
})

const upload = multer({
  storage: storage,
  limits:{fileSize: 5000000},
})

router.post("/user/:id", upload.single("imageUrl"), (req, res) => {
  const url = req.protocol + '://' + req.get('host')
  const image = url + '/public/' + req.file.filename
  const id = req.params.id
  User.findByIdAndUpdate(id, { imageUrl: image }).then((updatedUser) => {
    return res.status(201).send(image)
  })
})

router.get('/info/:id', (req, res) => {
  const id = req.params.id
  User.findById(id).then((user) => {
    return res.status(201).send(user)
  })
})
router.get("/products/:id", (req, res, next) => {
  const id = req.params.id
  const criteria = { createdAt: "-1" }
  User.findOne({ _id: id })
    .populate("products")
    .populate("smartProducts")
    .sort(criteria)
    .then((products) => {
      return res.status(200).send(products)
    })
    .catch(next)
})

router.post("/register", async (req, res) => {
  const { username } = req.body
  const user = await User.find({ username: username })
  const status = await signUp(req, res)
  if (status) {
    res.status(200).send(user)
  } else {
    return res.status(400).json('Check your fields')
  }
})
router.post("/signin", async (req, res, next) => {
  const { username } = req.body
  const user = await User.findOne({ username })
  if (user === null) {
     res.status(401).json("User does not exist")
  }
  const status = await signIn(req, res).catch((e) => { return e})
  if (status) {
     res.status(200).send(user)
  } else {
     res.status(401).json("Password is incorrect")
  }
  return
})

router.get("/verify", verify)

module.exports = router