const express = require('express');
const router = express.Router();

//Home route
router.get('/', (req, res) => {
  const title = 'Students Management System';
  res.render('index', {
    title: title
  })
});

//About route
router.get('/about', (req, res) => {
  res.render('about')
});

module.exports = router;
