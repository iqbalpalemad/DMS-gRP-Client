const { body } = require('express-validator');


exports.folderCreateValidation = () => {
    return [
        body('name').exists().isLength({ min: 5 }),
        body('parentFolderId').exists().isLength({ min: 24 , max:24})
    ]
}


exports.folderUpdateValidation = () => {
    return [
        body('name').optional().isLength({ min: 5 }),
        body('parentFolderId').optional().isLength({ min: 24 , max:24})
    ]
}