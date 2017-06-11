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
    })
    .post((req, res) => {
        console.log('POST /tasks');

        /* Get all task & find free id for new task */
        let indexOfTask = 0;

        Task.find((err, tasks) => {
            if (err) {
                res.status(500).send(err);
                return;
            }

            if (tasks) {
                indexOfTask = tasks[0].id;
            }
            tasks.forEach(function (item) {
                if (item.id > indexOfTask)
                    indexOfTask = item.id;
            }, this);

            /* Created new task */
            var task = new Task(req.body);
            task.id = indexOfTask + 1;

            task.save();

            res.status(201).send(task);
        });
    });


taskRouter
    .route('/tasks/:id')
    .get((req, res) => {
        console.log('GET /tasks/:id');

        var taskId = req.params.id;

        Task.findOne({ id: taskId }, (err, task) => {
            if (err) {
                res.status(500).send(err);
                return;
            }

            console.log(task);
            res.json(task);
        });
    })
    .put((req, res) => {
        console.log('PUT /tasks/:id');

        var taskId = req.params.id;

        Task.findOne({ id: taskId }, (err, task) => {
            if (err) {
                res.status(500).send(err);
                return;
            }

            if (task) {
                task.title = req.body.title;
                task.start = req.body.start;
                task.duration = req.body.duration;
                task.priority = req.body.priority;
                task.description = req.body.description;

                task.save();

                res.json(task);
                return;
            }

            res.status(404).json({
                message: 'Task with id ' + taskId + 'was not found'
            });
        });
    })
    .delete((req, res) => {
        console.log('DELETE /tasks/:id');

        var taskId = req.params.id;

        Task.findOne({ id: taskId }, (err, task) => {
            if (err) {
                res.status(500).send(err);
                return;
            }

            if (task) {
                task.remove((err) => {
                    if (err) {
                        res.status(500).send(err);
                        return;
                    }

                    res.status(200).json({
                        'message': 'Task with id ' + taskId + ' was removed.'
                    });
                });
            } else {
                res.status(404).json({
                    message: 'Task with id ' + taskId + ' was not found.'
                });
            }
        });
    });

module.exports = taskRouter;