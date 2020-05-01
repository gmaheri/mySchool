const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('This coming from the router student file in route folder')
})

module.exports = router;
