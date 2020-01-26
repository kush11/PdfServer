const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const route = require('./routes/routes');

// defining port
const PORT = process.env.PORT || 3000;

//connct to db
mongoose.connect('mongodb+srv://admin:password%40123@subjectmaterial-jepiz.mongodb.net/test?retryWrites=true&w=majority',{useNewUrlParser:true});

app.use(bodyParser.json());

var Router = express.Router();

app.use('/api/v1',Router);

// path to get the pdf
app.use('/pdf', express.static(__dirname + '/Class 10'));

route.init(Router);

mongoose.Promise = global.Promise;

// server is running at port 3000
app.listen(PORT, () => {
    console.log(`Server Started on Port ${PORT}`);
});