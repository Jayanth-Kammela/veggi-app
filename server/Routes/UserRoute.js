var express = require('express');
var router = express.Router();
const { forLogin, forSignup } = require('../Controllers/User')

router.post('/login', forLogin);
router.post('/signup', forSignup);

module.exports = router;
