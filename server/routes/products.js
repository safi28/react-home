const controllers = require('../controllers/products');
const { getUsername } = require('../controllers/auth');
const router = require('express').Router();

router.get('/', getUsername, controllers.get)
router.get('/products', controllers.getProducts)
router.post('/create', getUsername, controllers.post)
module.exports = router 