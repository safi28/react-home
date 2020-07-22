const mongoose = require("mongoose")
const config = require("./config")

module.exports = () => {
  return mongoose.connect(config.development.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  })
}
