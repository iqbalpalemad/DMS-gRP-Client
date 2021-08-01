const grpcFileClient            = require('../../grpcClient/grpcFileClient')
const { validationResult }      = require('express-validator')

const updateFile   = (req,res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({result : false, errors: errors.array() })
    }

    try{
        grpcClient = grpcFileClient()
        const fileRequest = {
            token  : req.token,
            name : "",
            parentFolderId : "",
            fileId : req.params.fileId
        }

        if(req.body.parentFolderId){
            fileRequest.parentFolderId = req.body.parentFolderId
        }

        if(req.body.name){
            fileRequest.name = req.body.name
        }

        if(req.body.content){
            fileRequest.content = req.body.content
        }

        grpcClient.update(fileRequest, (err, response) => {
            if(err){
                return res.status(500).json({result : false, error : err.message});
            }
            if(!response.result){
                return res.status(400).json(response);
            }
            return res.status(201).json(response);
        })
    }
    catch(err){
        return res.status(500).json({result : false, error : err.message});
    }
}

module.exports = updateFile;