const mongoose = require('mongoose');

const StudentsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  gender:{
    type: String,
    required: true
  },
  admno: {
    type: Number,
    required: true,
    unique: true
  },
  class: {
    type: String,
    required: true
  },
  dob: {
    type: Date,
    required: true
  },
  yob: {
    type: Date,
    required: true
  }
});

module.exports = mongoose.model('Student', StudentsSchema);
