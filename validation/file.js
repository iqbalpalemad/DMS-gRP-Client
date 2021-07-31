const { body } = require('express-validator');


exports.fileCreateValidation = () => {
    return [
        body('name').exists().isLength({ min: 5 }),
        body('parentFolderId').optional().isLength({ min: 24 , max:24}),
        body('content').optional()
    ]
}