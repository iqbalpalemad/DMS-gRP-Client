const express       = require('express');
const router        = express.Router();
const validate      = require('../validation/file');
const userAuth      = require('../Middleware/userAuth');

const createFile    = require('../Controller/file/create');
const updateFile    = require('../Controller/file/update');
const deleteFile    = require('../Controller/file/delete');
const moveFile      = require('../Controller/file/move');

router.post('/',userAuth,validate.fileCreateValidation(),createFile);
router.put('/:fileId',userAuth,validate.fileUpdateValidation(),updateFile);
router.delete('/:fileId',userAuth,deleteFile);
router.post('/move/:fileId/:parentFolderId',userAuth,moveFile)
module.exports = router;

