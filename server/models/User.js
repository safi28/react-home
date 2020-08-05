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
  imageUrl: { type: String },
  products: [{type: mongoose.Types.ObjectId, ref: 'Product' }],
  smartProducts: [{type: mongoose.Types.ObjectId, ref:'Automation'}]
})

module.exports = mongoose.model("User", userSchema)