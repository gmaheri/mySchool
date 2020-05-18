const express = require('express');
const router = express.Router();
const Student = require('../models/Students');
const {addStudent} = require('../controllers/student')

// Home route
router.get('/', (req, res) => {
  const title = 'Students Management System';
  const schoolName = 'Little Barn Kindergatten'
  res.render('index', {
    title: title,
    schoolName: schoolName
  })
});

// Add students
router.get('/student', (req, res) => {
  res.render('students/add')
})

//Add student form process
router
.route('/student')
.post(addStudent);

// About route
router.get('/about', (req, res) => {
  res.render('about')
});

module.exports = router;
