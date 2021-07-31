const express   = require('express');
const router    = express.Router();
const validate  = require('../validation/auth');

const signup    = require('../Controller/auth/signup');


router.post('/signup',validate.authValidate(),signup);

module.exports = router;