const grpcUserClient            = require('../../grpcClient/grpcFolderclient')
const { validationResult }      = require('express-validator')
const createFolder   = (req,res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({result : false, errors: errors.array() })
    }
    try{
        grpcClient = grpcUserClient()
        const folderRequest = {
            name   : req.body.name,
            userId : req.body.userId
        }
        if(req.body.parentFolderId){
            folderRequest.parentFolderId = req.body.parentFolderId
        }
        grpcClient.create(folderRequest, (err, response) => {
            if(err){
                return res.status(500).json({result : false, error : err.message});
            }
            if(!response.result){
                return res.status(400).json(response);
            }
            return res.status(201).json(response);
        })
    }catch(err){
        return res.status(500).json({result : false, error : err.message});
    }
}        


module.exports = createFolder;