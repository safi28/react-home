const Product = require("../models/Product");
const User = require("../models/User");

module.exports = {
  get: async (req, res) => {
    const products = await Product.find();
    res.send(products);
  },
  post: async (req, res, next) => {
    const { name } = req.body;
    const { id } = req.user;
    const date = (new Date() + "").slice(0, 24);
    const newProduct = await Product.findOne({ name: name });
    if (!newProduct.user.includes(id)) {
      const productId = newProduct._id;
      await Product.findByIdAndUpdate(productId, { createdAt: date });
      await Product.findByIdAndUpdate(productId, { $addToSet: { user: id } });
      await User.updateOne(
        { _id: id },
        { $push: { products: newProduct._id } }
      );
      return res.send(newProduct);
    }
    return res.send("already added");
  },
  getProducts: async (req, res) => {
    const id = req.params.id;
    const usersProducts = await User.findOne({ _id: id });
    res.send(usersProducts.products);
  },
};
