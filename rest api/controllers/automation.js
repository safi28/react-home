const Automation = require("../models/Automation");
const User = require("../models/User");
const Product = require("../models/Product");

module.exports = {
  getAll: (req, res) => {
    Automation.find().then((product) => {
      res.send(product);
    });
  },
  post: async (req, res) => {
    const { name } = req.body;
    const { id } = req.user;
    const date = (new Date() + "").slice(0, 24);
    const newProduct = await Automation.findOne({ name: name });
    const user = await User.findById(id);
    if (
      !newProduct.user.includes(id) &&
      !user.smartProducts.includes(newProduct._id)
    ) {
      const smartId = newProduct._id;
      await Automation.findByIdAndUpdate(smartId, { createdAt: date });
      await Automation.findByIdAndUpdate(smartId, {
        $addToSet: { user: id },
      });
      await User.updateOne(
        { _id: id },
        { $push: { smartProducts: newProduct._id } }
      );
      res.send(newProduct);
    }
    return;
  },
  delete: async (req, res) => {
    const { name } = req.body;
    const { id } = req.user;
    const smartProduct = await Automation.findOne({ name });
    const interiorProduct = await Product.findOne({ name });

    if (smartProduct !== null) {
      await User.findByIdAndUpdate(id, {
        $pull: { smartProducts: smartProduct._id },
      });
      await Automation.findOneAndUpdate({ name: name }, {
        $pull: { user: id },
      });
    }
    if (interiorProduct !== null) {
      await User.findByIdAndUpdate(id, {
        $pull: { products: interiorProduct._id },
      });
      await Product.findOneAndUpdate({name: name}, {
        $pull: { user: id },
      });
    }
    return res.status(200).json("Product is deleted");
  },
};
