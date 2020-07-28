const controllers = require("../controllers/products")
const { getUsername, guestAccess, getUserStatus } = require("../controllers/auth")
const router = require("express").Router()

router.get("/", guestAccess, getUserStatus, getUsername, controllers.get)
router.get("/products", guestAccess, getUserStatus, controllers.getProducts)
router.post("/create", getUsername, controllers.post)

module.exports = router