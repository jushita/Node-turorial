const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const todoModel = new Schema({
    complete: { type: Boolean },
    message: { type: String }
});

exports.Todo = mongoose.model('todos', todoModel);