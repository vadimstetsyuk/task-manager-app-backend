var express = require('express');
var Task = require('../models/task');

var taskRouter = express.Router();

taskRouter
    .route('/tasks')
    .get((req, res) => {
        console.log('GET /tasks');

        Task.find((err, tasks) => {
            if (err) {
                res.status(500).send(err);
                return;
            }

            console.log(tasks);
            res.json(tasks);
        });
    });

module.exports = taskRouter;