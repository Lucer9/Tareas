exports.isAuth = (req, res, next) => {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.redirect('auth/login')
    }
}


exports.isAuthAdmin = (req, res, next) => {
    if (req.isAuthenticated()) {
        if (req.user.role == "admin") {
            next();
        } else {
            let user = req.user;
            res.render('dashboard/index', { user: user });
        }
    } else {
        res.render('auth/login')
    }
}