const grpcFileClient            = require('../../grpcClient/grpcFileClient')

const moveFile   = (req,res) => {

    try{
        grpcClient = grpcFileClient()
        const fileRequest = {
            token  : req.token,
            name   : "",
            parentFolderId : req.params.parentFolderId,
            fileId : req.params.fileId
        }
        grpcClient.move(fileRequest, (err, response) => {
            if(err){
                return res.status(500).json({result : false, error : err.message});
            }
            if(!response.result){
                return res.status(400).json(response);
            }
            return res.status(200).json(response);
        })
    }
    catch(err){
        return res.status(500).json({result : false, error : err.message});
    }
}


module.exports = moveFile;