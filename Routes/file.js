const express       = require('express');
const router        = express.Router();
const validate      = require('../validation/file');
const userAuth      = require('../Middleware/userAuth');

const createFile    = require('../Controller/file/create');
const updateFile    = require('../Controller/file/update');

router.post('/',userAuth,validate.fileCreateValidation(),createFile);
router.put('/:fileId',userAuth,validate.fileUpdateValidation(),updateFile);

module.exports = router;

