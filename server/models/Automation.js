const mongoose = require("mongoose")

const Automation = new mongoose.Schema({
  name: {
      type: String,
      unique: true
  },
  price: String,
  durability: String,
  imageUrl: String,
  user: [{type: mongoose.Types.ObjectId, unique: true, ref: 'User', unique: true}]
})
module.exports = mongoose.model("Automation", Automation)
