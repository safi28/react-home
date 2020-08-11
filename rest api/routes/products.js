const router = require("express").Router()
const controllers = require("../controllers/products")
const { auth } = require("../utils")

router.get("/all", controllers.get)
router.get("/", controllers.get)
router.get("/products", controllers.getProducts)
router.post("/create", auth(), controllers.post)

module.exports = router
