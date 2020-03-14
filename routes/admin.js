let router = require('express').Router();
let dashboardController = require('../controllers/DashboardController');
router.get('/users', dashboardController.users);
module.exports = router;