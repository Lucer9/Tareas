let UserModel = require('../models/User')

exports.index = (req, res) => {
    let user = req.user;
    res.render('dashboard/index', { user: user });
}


exports.users = (req, res) => {
    UserModel.getAll().then((data) => {
        let users = data;
        res.render('dashboard/users', { users, users });
    });
}