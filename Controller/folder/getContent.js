const grpcFolderclient            = require('../../grpcClient/grpcFolderclient')

const getFolderContents   = (req,res) => {
    try{
        grpcClient = grpcFolderclient()
        const folderRequest = {
            token  : req.token,
            folderId : req.params.folderId,
            type : req.params.type
        }

        grpcClient.getContent(folderRequest, (err, response) => {
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

module.exports = getFolderContents;