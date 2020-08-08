const router = require("express").Router()
const automation = require("../controllers/automation")
const auth = require("../utils/auth")

router.get("/all", automation.getAll)
router.post("/create", auth(), automation.post)

module.exports = router
