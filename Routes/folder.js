const express       = require('express');
const router        = express.Router();
const validate      = require('../validation/folder');
const userAuth      = require('../Middleware/userAuth');

const createFolder  = require('../Controller/folder/create')

router.post('/',userAuth,validate.folderCreateValidation(),createFolder);

module.exports = router;