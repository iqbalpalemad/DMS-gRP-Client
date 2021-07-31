const express       = require('express');
const dotenv        = require('dotenv');
const app           = express();

const authRoute     = require('./Routes/auth')
const folderRoute   = require('./Routes/folder')

dotenv.config();
app.use(express.json());

app.use('/auth',authRoute);
app.use('/folder',folderRoute);

module.exports      = app;