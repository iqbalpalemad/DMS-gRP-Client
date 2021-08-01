const express       = require('express');
const dotenv        = require('dotenv');
const app           = express();

const authRoute     = require('./Routes/auth');
const folderRoute   = require('./Routes/folder');
const fileRoute     = require('./Routes/file');
const userRuote     = require('./Routes/user');

dotenv.config();
app.use(express.json());

app.use('/auth',authRoute);
app.use('/folder',folderRoute);
app.use('/file',fileRoute);
app.use('/user',userRuote);

app.use((req, res, next) => {
    res.status(404).json({
        result  : false,
        message : 'requested resource not found'
    })
})

module.exports      = app;