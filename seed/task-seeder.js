var Task = require('../models/task');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('localhost:27017/task-manager');

var tasks = [
    new Task({
        id: 1,
        title: 'Task 1',
        start: new Date(2017, 6, 1, 12, 10, 0),
        duration: 62,
        priority: 1,
        description: 'test fwegeg'
    }),
    new Task({
        id: 2,
        title: 'Task 2',
        start: new Date(2017, 6, 12, 12, 10, 0),
        duration: 61,
        priority: 1,
        description: 'test gss'
    }),
    new Task({
        id: 3,
        title: 'Task 3',
        start: new Date(2017, 6, 23, 12, 10, 0),
        duration: 67,
        priority: 1,
        description: 'test erhe'
    }),
    new Task({
        id: 4,
        title: 'Task 4',
        start: new Date(2017, 6, 12, 12, 10, 0),
        duration: 9,
        priority: 1,
        description: 'test fdsrg'
    }),
    new Task({
        id: 5,
        title: 'Task 5',
        start: new Date(2017, 6, 12, 12, 10, 0),
        duration: 4,
        priority: 1,
        description: 'test dsfsd'
    }),
    new Task({
        id: 6,
        title: 'Task 6',
        start: new Date(2017, 6, 16, 12, 10, 0),
        duration: 34,
        priority: 3,
        description: 'test dsf'
    }),
    new Task({
        id: 7,
        title: 'Task 7',
        start: new Date(2017, 6, 30, 12, 10, 0),
        duration: 12,
        priority: 2,
        description: 'test task'
    }),
    new Task({
        id: 8,
        title: 'Task 8',
        start: new Date(2017, 6, 31, 12, 10, 0),
        duration: 31,
        priority: 1,
        description: 'test task'
    })
];

var done = 0;
for (var i = 0; i < tasks.length; i++) {
    tasks[i].save();
}

function exit() {
    mongoose.disconnect();
}