const express = require("express");
const dbConnector = require("./configs/db");
const app = express();

dbConnector()
  .then(() => {
    const config = require("./configs/config");
    require("./configs/express")(app)
    require('./configs/route')(app)

  //   app.use(function (err, req, res, next) {
  //     console.error(err);
  //     res.status(500).send(err.message);
  //     console.log('*'.repeat(90))
  // });
    app.listen(
      config.development.port,
      console.log(`Port ${config.development.port}* is ready!`)
    );
  })
  .catch(console.error);
