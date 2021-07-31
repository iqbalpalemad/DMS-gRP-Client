const express       = require('express');
const authRoute     = require('./Routes/auth')
const dotenv        = require('dotenv');
const app           = express();

dotenv.config();
app.use(express.json());
app.use('/auth',authRoute);

module.exports      = app;