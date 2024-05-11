// models/DeitPlan.js
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema(  {
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 20,
  },
  description: {
    type: String,
    required: true,
  },
  duration: {
    type: integer,
    required: true,
  },
  age: {
    type: integer,
    required: true,
  },
  weight: {
    type: float,
    required: true,
  },
  height: {
    type: float,
    required: true,
  },
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
