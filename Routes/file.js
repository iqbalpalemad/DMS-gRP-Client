const express       = require('express');
const router        = express.Router();
const validate      = require('../validation/file');
const userAuth      = require('../Middleware/userAuth');

const createFile  = require('../Controller/file/create');

router.post('/',userAuth,validate.fileCreateValidation(),createFile);

module.exports = router;

