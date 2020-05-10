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
router.get('/students', (req, res) => {
  res.render('students/add')
})

//About route
router.get('/about', (req, res) => {
  res.render('about')
});

module.exports = router;
