var express = require('express');
var router = express.Router();
const { forLogin, forSignup, userGet } = require('../Controllers/User')
const protectedRoute = require('../Middleware/Middleware')

router.post('/login', forLogin);
router.post('/signup', forSignup);
router.get('/userdetails', protectedRoute, userGet);

module.exports = router;
