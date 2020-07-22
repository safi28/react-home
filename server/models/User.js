const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  products: [{type: mongoose.Types.ObjectId, ref: 'Product'}]
})

module.exports = mongoose.model("User", userSchema)
