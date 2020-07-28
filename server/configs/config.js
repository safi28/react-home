module.exports = {
  development: {
    port: process.env.PORT || 9999,
    DB_URL: "mongodb+srv://user:user123@reacthome.90yu1.mongodb.net/IHome?retryWrites=true&w=majority",
    cookie: "auth_cookie",
    privateKey: "secret123",
  },
  production: {},
}
