const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const config = require("./config");
const express = require("express");
const path = require("path");

module.exports = (app) => {
  app.use(
    cors({
      exposedHeaders: "Authorization",
    })
  );
  app.use("/public", express.static("public"));
  app.use(express.static(path.join(__dirname, "./public/")));
  app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
  app.use(bodyParser.json({ limit: "50mb" }));
  app.use(cookieParser(config.development.privateKey));
};
