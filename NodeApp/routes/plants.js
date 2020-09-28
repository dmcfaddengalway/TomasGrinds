const express = require('express');
const router = express.Router();

/* GET plants page. */
router.get('/plants', (req, res) => {
  res.render('plants');
});

module.exports = router;
