var express = require('express');

var app = express();

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
});

var PORT = 3000;
var HOST_NAME = 'localhost';

app.listen(PORT, () => {
    console.log('Listening on port ' + PORT);
});