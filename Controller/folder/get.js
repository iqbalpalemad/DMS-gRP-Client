const grpcFolderclient            = require('../../grpcClient/grpcFolderclient')

const getFolder   = (req,res) => {
    try{
        grpcClient = grpcFolderclient()
        const folderRequest = {
            token  : req.token,
            name : "",
            parentFolderId : "",
            folderId : req.params.folderId
        }

        grpcClient.get(folderRequest, (err, response) => {
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

module.exports = getFolder;