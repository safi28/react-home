const jwt = require('./jwt');
const User = require('../models/User');

module.exports = (redirectAuthenticated = true) => {
    return function (req, res, next) {
        const token = req.headers.authorization || '';
        jwt.verifyToken(token).then(data => {
           User.findById(data.userID)
            .then((user) => {
                req.user = user;
                next();
            }).catch(err => {
              next(err)
            });
        })
    }
};