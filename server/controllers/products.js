const Product = require("../models/Product")
const User = require("../models/User")
const jwt = require("jsonwebtoken")
const config = require("../configs/config")
module.exports = {
  get: (req, res, next) => {
    Product.find()
      .then((products) => {
        // res.send(products)
      })
      .catch(next)
  },
  post: async (req, res, next) => {
      const { name, price, durability, imageUrl } = req.body
      const token = req.cookies[config.development.cookie]
      const decodedObject = jwt.verify(token, config.development.privateKey)
      const id = decodedObject.userID
      const newProduct = await Product.findOne({ name: name })
      await Product.updateOne({ _id: newProduct._id }, { $push: { user: id } })
      await User.updateOne({ _id: id }, { $push: { products: newProduct._id } })
      res.send(newProduct)
    },
    getProducts: async (req, res) => {
        const token = req.cookies[config.development.cookie]
        const decodedObject = jwt.verify(token, config.development.privateKey)
        const id = decodedObject.userID
        const usersProducts = await User.findOne({_id: id})
        console.log(usersProducts.products);
        res.send(usersProducts.products)
    },
}
