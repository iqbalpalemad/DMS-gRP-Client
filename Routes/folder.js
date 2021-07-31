const express       = require('express');
const router        = express.Router();
const validate      = require('../validation/folder');
const userAuth      = require('../Middleware/userAuth');

const createFolder  = require('../Controller/folder/create');
const updateFolder  = require('../Controller/folder/update');

router.post('/',userAuth,validate.folderCreateValidation(),createFolder);
router.put('/:folderId',userAuth,validate.folderUpdateValidation(),updateFolder);
module.exports = router;