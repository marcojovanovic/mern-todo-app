const mongoose = require('mongoose');

const TasksSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  job: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Tasks', TasksSchema)
