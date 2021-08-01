const grpcFolderclient            = require('../../grpcClient/grpcFolderclient')
const { validationResult }      = require('express-validator')

const updateFolder   = (req,res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({result : false, errors: errors.array() })
    }

    try{
        grpcClient = grpcFolderclient()
        const folderRequest = {
            token  : req.token,
            name : "",
            parentFolderId : "",
            folderId : req.params.folderId
        }

        if(req.body.parentFolderId){
            folderRequest.parentFolderId = req.body.parentFolderId
        }

        if(req.body.name){
            folderRequest.name = req.body.name
        }

        grpcClient.update(folderRequest, (err, response) => {
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


module.exports = updateFolder;