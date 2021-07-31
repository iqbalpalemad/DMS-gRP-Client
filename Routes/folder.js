const express       = require('express');
const router        = express.Router();
const validate      = require('../validation/folder');

const createFolder  = require('../Controller/folder/create')

router.post('/',validate.folderCreateValidation(),createFolder);

module.exports = router;