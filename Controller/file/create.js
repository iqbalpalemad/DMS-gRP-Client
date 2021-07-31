const grpcFileclient             = require('../../grpcClient/grpcFileclient')
const { validationResult }      = require('express-validator')

const createFile   = (req,res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({result : false, errors: errors.array() })
    }

    try{
        grpcClient = grpcFileclient()
        const fileRequest = {
            token  : req.token,
            name   : req.body.name
        }
        if(req.body.parentFolderId){
            fileRequest.parentFolderId = req.body.parentFolderId
        }
        if(req.body.content){
            fileRequest.content = req.body.content
        }
        grpcClient.create(fileRequest, (err, response) => {
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




module.exports = createFile;