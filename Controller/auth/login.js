const grpcUserClient            = require('../../grpcClient/grpcUserClient')
const { validationResult }      = require('express-validator')

const login = async (req,res) => {
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
        grpcClient.login(userRequest, (err, response) => {
            if(err){
                res.status(500).json({result : false, error : err.message});
            }

            if(!response.result){
                return res.status(400).json(response);
            }
            return res.status(201).json(response);
        })
    }
    catch(err){
        res.status(500).json({result : false, error : err.message});
    }
}

module.exports = login;