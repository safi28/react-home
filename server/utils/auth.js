const jwt = require('./jwt');
const User = require('../models/User');

module.exports = (redirectAuthenticated = true) => {
    return function (req, res, next) {
        const token = req.headers.authorization || '';
        console.log(token);
        jwt.verifyToken(token).then(data => {
            console.log('verified ',data);
            console.log(data);
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