const mongoose = require('mongoose');

const StudentsSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  admno: {
    type: String,
    unique: true,
    required: true
  },
  stream: {
    type: String,
    required: true
  },
  birthDate: {
    type: Date,
    required: true
  },
  admnDate: {
    type: Date,
    required: true
  },
  gender:{
    type: String,
    required: true
  },
 parentName: {
   type: String,
   required: true
 },
 phoneNumber: {
   type: Number,
   required: true
 },
 altphoneNumber: {
   type: Number,
   required: true
 },
 email: {
   type: String,
   required: true
 },
 address: {
   type: String,
   required: true
 },
 createdAt: {
   type: Date,
   default: Date.now
 }

});

module.exports = mongoose.model('Student', StudentsSchema);
