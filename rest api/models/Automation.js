const mongoose = require("mongoose");

const Automation = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },
  price: String,
  durability: String,
  imageUrl: String,
  createdAt: {
    type: String,
  },
  user: [{ type: mongoose.Types.ObjectId, ref: "User" }],
});
module.exports = mongoose.model("Automation", Automation);
