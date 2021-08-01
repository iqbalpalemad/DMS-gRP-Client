const grpcUserClient            = require('../../grpcClient/grpcUserClient')

const deleteUser = (req,res) => {
    try{
        grpcClient = grpcUserClient()
        const userRequest = {
            token           : req.token,
            userId          : req.params.userId
        }
        grpcClient.delete(userRequest,(err, response) =>{
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

module.exports = deleteUser;