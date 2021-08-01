const grpcFileClient            = require('../../grpcClient/grpcFileClient')

const getFile   = (req,res) => {
    try{
        grpcClient = grpcFileClient()
        const fileRequest = {
            token  : req.token,
            name : "",
            parentFolderId : "",
            fileId : req.params.fileId
        }

        grpcClient.get(fileRequest, (err, response) => {
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

module.exports = getFile;