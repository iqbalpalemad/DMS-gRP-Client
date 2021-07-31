const grpcUserClient            = require('../../grpcClient/grpcFolderclient')

const deleteFolder   = (req,res) => {
    try{
        grpcClient = grpcUserClient()
        const folderRequest = {
            token  : req.token,
            name : "",
            parentFolderId : "",
            folderId : req.params.folderId
        }

        grpcClient.delete(folderRequest, (err, response) => {
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

module.exports = deleteFolder;