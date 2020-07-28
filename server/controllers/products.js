const Product = require("../models/Product");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const config = require("../configs/config");
module.exports = {
  get: (req, res, next) => {
    Product.find()
      .then((products) => {})
      .catch(next);
  },
  post: async (req, res, next) => {
    const { name } = req.body;
    const token = req.cookies[config.development.cookie];
    const decodedObject = jwt.verify(token, config.development.privateKey);
    const id = decodedObject.userID;
    const newProduct = await Product.findOne({ name: name })
    if(!newProduct.user.includes(id)) {
    await Product.updateOne({ _id: newProduct._id }, { $push: { user: id } });
    await User.updateOne({ _id: id }, { $push: { products: newProduct._id } });
    return res.send(newProduct);
    }
   return res.send('already added')
  },
  getProducts: async (req, res) => {
    const token = req.cookies[config.development.cookie];
    const decodedObject = jwt.verify(token, config.development.privateKey);
    const id = decodedObject.userID;
    const usersProducts = await User.findOne({ _id: id });
    res.send(usersProducts.products);
  },
};
