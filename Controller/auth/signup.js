const grpcUserClient            = require('../../grpcClient/grpcUserClient')
const { validationResult }      = require('express-validator')
const signup =  (req,res) => {
    grpcClient = grpcUserClient()
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({result : false, errors: errors.array() })
    }
    try{
        const userRequest = {
            email    : req.body.email,
            password : req.body.password
        }
        grpcClient.createUser(userRequest, (err, response) => {
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


module.exports = signup;