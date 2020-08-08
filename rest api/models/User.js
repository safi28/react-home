const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    min: 4,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    min: 6,
    required: true,
  },
  imageUrl: { type: String },
  products: [{type: mongoose.Types.ObjectId, ref: 'Product' }],
  smartProducts: [{type: mongoose.Types.ObjectId, ref:'Automation'}]
})

module.exports = mongoose.model("User", userSchema)