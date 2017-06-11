var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var taskSchema = new Schema({
    id: {
        type: Number,
        unique: true,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    start: {
        type: Date,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    priority: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, { collection: 'tasks' });

module.exports = mongoose.model('Task', taskSchema);