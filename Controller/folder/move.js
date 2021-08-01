const grpcUserClient            = require('../../grpcClient/grpcFolderclient')

const moveFolder   = (req,res) => {

    try{
        grpcClient = grpcUserClient()
        const folderRequest = {
            token  : req.token,
            name : "",
            parentFolderId : req.params.parentFolderId,
            folderId : req.params.folderId
        }
        console.log(folderRequest)
        grpcClient.move(folderRequest, (err, response) => {
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


module.exports = moveFolder;