var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) { //當網頁URI是 localhost:3000/index
  res.render('index', { title: 'Express' });
});


module.exports = router;
