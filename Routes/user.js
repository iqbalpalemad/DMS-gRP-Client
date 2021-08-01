const express           = require('express');
const router            = express.Router();
const userAuth          = require('../Middleware/userAuth');

const getAllUsers       = require('../Controller/users/getAll');

router.get('/',userAuth,getAllUsers);


module.exports = router;