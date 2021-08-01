const grpcUserClient            = require('../../grpcClient/grpcUserClient')

const getAll = () => {
    try{
        grpcClient = grpcUserClient()
        grpcClient.getAll({},(err, response) =>{
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

module.exports = getAll();