const express = require('express');
const router = express.Router();
const Student = require('../models/Students')

//Home route
router.get('/', (req, res) => {
  const title = 'Students Management System';
  res.render('index', {
    title: title
  })
});

//View all students
router.get('/student', (req, res) => {
  res.render('students/add')
})

//Add student form process --> implement server side form validation later
router.post('/student', (req, res) => {
  const newStudent = {
    firstName : req.body.firstName,
    lastName : req.body.lastName,
    admnNo : req.body.admnNo,
    stream : req.body.class,
    birthDate : req.body.birthDate,
    admnDate : req.body.admnDate,
    gender : req.body.gender,
    parentName : req.body.parentName,
    phoneNumber : req.body.phoneNumber,
    altphoneNumber : req.body.altphoneNumber,
    email : req.body.email,
    address : req.body.address
  }
 new Student(newStudent).save()
 .then(student => {
   res.redirect('/allstudents')
 })
 .catch(error => {
   console.log(error)
   //display error if duplicate key for admn numner
 });
})

//About route
router.get('/about', (req, res) => {
  res.render('about')
});

module.exports = router;
