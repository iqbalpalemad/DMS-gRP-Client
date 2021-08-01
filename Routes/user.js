const express           = require('express');
const router            = express.Router();
const userAuth          = require('../Middleware/userAuth');

const getAllUsers       = require('../Controller/users/getAll');
const deleteUser        = require('../Controller/users/delete');

router.get('/',userAuth,getAllUsers);
router.delete('/:userId',userAuth,deleteUser);


module.exports = router;