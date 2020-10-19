const express = require('express');
const router = express.Router();
const members = require('../routes/api/members');

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index');
});

module.exports = router;
