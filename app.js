var express = require('express');
var mongoose = require('mongoose');
var bodyBarser = require('body-parser');
var taskRouter = require('./routes/task');

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
var DATABASE_NAME = 'task-manager';

mongoose.connect('mongodb://' + HOST_NAME + '/' + DATABASE_NAME);

app.use(bodyBarser.json());
app.use(bodyBarser.urlencoded({
    extended: true
}));

app.use('/api', taskRouter);

app.listen(PORT, () => {
    console.log('Listening on port ' + PORT);
});