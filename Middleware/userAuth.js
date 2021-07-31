
const userAuth = async (req, res, next) => {
    const header = req.headers['authorization'];
    if(header){
        const headerArray = header.split(' ');
        const token       = headerArray[1];
        if(token){
            req.token     = token
            next();
        }
        else{
            return res.status(400).json({result : false, message : "Authorization failed"});
        }
    }
    else{
        return res.status(400).json({result : false, message : "Authorization failed"});
    }
}


module.exports = userAuth;