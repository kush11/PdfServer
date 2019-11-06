const express = require('express')
const app = express();

// defining port
const PORT = process.env.PORT || 3000;

// path to get the pdf
app.use('/pdf', express.static(__dirname + '/Class 10'));

// server is running at port 3000
app.listen(PORT, () => {
    console.log(`Server Started on Port ${PORT}`);
});