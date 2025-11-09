var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get handles only get requests unlike app.use
router.get('/', function(req, res, next) {
  // Look for 'views' folder and 'index' file inside it
  // Views path is set in app.js
  res.render('index', { title: 'Express' });
});

module.exports = router;

