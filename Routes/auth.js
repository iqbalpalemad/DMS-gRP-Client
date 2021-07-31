const express   = require('express');
const router    = express.Router();
const validate  = require('../validation/auth');

const signup    = require('../Controller/auth/signup');
const login     = require('../Controller/auth/login');

router.post('/signup',validate.authValidate(),signup);
router.post('/login',validate.authValidate(),login);
module.exports = router;