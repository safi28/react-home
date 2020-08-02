const router = require("../routes");

module.exports = (app) => {
  app.use("/api/user", router.authRouter);
  app.use("/api/products", router.productRouter);
  app.use('/api/automation', router.automationRouter)
  
  app.use("*", (req, res, next) =>
    res.send("<h1> Something went wrong. Try again. :thumbsup: </h1>")
  );
};
