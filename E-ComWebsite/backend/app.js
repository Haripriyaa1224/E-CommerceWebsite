const express = require('express');
const dotenv = require('dotenv');
const ErrorHandler = require('./utils/ErrorHandler');
const app = express();
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');

app.use(express.json())
app.use(cookieParser);
app.use(bodyParser.urlencoded({extended: true}));//doubt
app.use(fileUpload({useTempFiles: true}))


//config

if(process.env.NODE_ENV !== 'production'){
    dotenv.config();
}

//Error handling
app.use(ErrorHandler)

module.exports = app;
 

