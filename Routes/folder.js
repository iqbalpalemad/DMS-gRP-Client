const express       = require('express');
const router        = express.Router();
const validate      = require('../validation/folder');
const userAuth      = require('../Middleware/userAuth');

const createFolder  = require('../Controller/folder/create');
const updateFolder  = require('../Controller/folder/update');
const deleteFolder  = require('../Controller/folder/delete');
const moveFolder    = require('../Controller/folder/move');
const getFolder     = require('../Controller/folder/get');

router.post('/',userAuth,validate.folderCreateValidation(),createFolder);
router.put('/:folderId',userAuth,validate.folderUpdateValidation(),updateFolder);
router.delete('/:folderId',userAuth,deleteFolder);
router.post('/move/:folderId/:parentFolderId',userAuth,moveFolder)
router.get('/:folderId',userAuth,getFolder);
module.exports = router;