// models/Task.js
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  name: { type: String, required: true },
  city: String,
  age: Number,
  userID: Number
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
