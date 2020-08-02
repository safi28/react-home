const router = require("express").Router();
const controllers = require("../controllers/products");
const { guestAccess, getUserStatus } = require("../controllers/auth");
const { auth } = require("../utils");

router.get("/all", controllers.get);
router.get("/", guestAccess, getUserStatus, controllers.get);
router.get("/products", guestAccess, getUserStatus, controllers.getProducts);
router.post("/create", auth(), controllers.post);

module.exports = router;