var express = require('express');
var router = express.Router();
var title="MY PROJECRT"
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: title });
});
/*用户管理*/
router.get('/user', function(req, res, next) {
  res.render('user', { title: title });
});


module.exports = router;

