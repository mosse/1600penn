var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('layout', { title: 'Who\'s been to 1600 Penn' });
});

module.exports = router;
