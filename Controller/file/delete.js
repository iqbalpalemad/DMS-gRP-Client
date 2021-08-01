const grpcUserClient            = require('../../grpcClient/grpcFileClient')

const deleteFile   = (req,res) => {
    try{
        grpcClient = grpcUserClient()
        const fileRequest = {
            token  : req.token,
            name : "",
            parentFolderId : "",
            fileId : req.params.fileId
        }

        grpcClient.delete(fileRequest, (err, response) => {
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

module.exports = deleteFile;