const express       = require('express');
const router        = express.Router();
const validate      = require('../validation/file');
const userAuth      = require('../Middleware/userAuth');

const createFile    = require('../Controller/file/create');
const updateFile    = require('../Controller/file/update');
const deleteFile    = require('../Controller/file/delete');
const moveFile      = require('../Controller/file/move');
const getFile       = require('../Controller/file/get');

router.post('/',userAuth,validate.fileCreateValidation(),createFile);
router.put('/:fileId',userAuth,validate.fileUpdateValidation(),updateFile);
router.delete('/:fileId',userAuth,deleteFile);
router.post('/move/:fileId/:parentFolderId',userAuth,moveFile)
router.get('/:fileId',userAuth,getFile);
module.exports = router;

