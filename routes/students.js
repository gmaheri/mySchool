const express = require('express');
const router = express.Router();
const Student = require('../models/Students');
const {addStudent, fetchStudent} = require('../controllers/student')

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
router.get('/addstudent', (req, res) => {
  res.render('students/add')
})

//Add student form process
router
.route('/addstudent')
.post(addStudent);

// Display all Students from DB
router.get('/students', (req,res) => {
  Student.find({}).lean().sort({admno: 'desc'})
  .then(students => {
    res.render('students/allstudents', {
      students: students
    })
  })
  .catch(error => console.log(error))
});


// About route
router.get('/about', (req, res) => {
  res.render('about')
});

module.exports = router;
