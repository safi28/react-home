const Automation = require("../models/Automation")
const User = require("../models/User")

module.exports = {
    getAll: (req, res) => {
        Automation.find().then((product) => {
            res.send(product)
        })
    },
    post: async (req, res, next) => {
        const { name } = req.body
        const { id } = req.user
        console.log(name);
        const newProduct = await Automation.findOne({ name: name })
        if (!newProduct.user.includes(id)) {
          await Automation.updateOne({ _id: newProduct._id }, { $push: { user: id } })
          await User.updateOne(
            { _id: id },
            { $push: { products: newProduct._id } }
          )
          return res.send(newProduct)
        }
        return res.send("already added")
      },
}