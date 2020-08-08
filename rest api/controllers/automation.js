const Automation = require("../models/Automation");
const User = require("../models/User");

module.exports = {
  getAll: (req, res) => {
    Automation.find().then((product) => {
      res.send(product);
    });
  },
  post: async (req, res, next) => {
    const { name } = req.body;
    const { id } = req.user;
    const date = (new Date() + "").slice(0, 24);
    const newProduct = await Automation.findOne({ name: name });
    if (!newProduct.user.includes(id)) {
      const smartId = newProduct._id;
      await Automation.findByIdAndUpdate(
        smartId,
        { createdAt: date },
      );
      await Automation.findByIdAndUpdate(smartId, {
        $addToSet: {user: id}
      })
      await User.updateOne(
        { _id: id },
        { $push: { smartProducts: newProduct._id } }
      );
      return res.send(newProduct);
    }
    return res.send("already added");
  },
};
