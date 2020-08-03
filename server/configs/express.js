const cookieParser = require("cookie-parser")
const bodyParser = require("body-parser")
const cors = require("cors")
const config = require("./config")

module.exports = (app) => {
  app.use(
    cors({
      exposedHeaders: 'Authorization'
    })
  )
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(bodyParser.json())
  app.use(cookieParser(config.development.privateKey))
  }