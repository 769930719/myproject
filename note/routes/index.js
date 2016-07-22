var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'MyProject' });
});
/*系统管理*/
router.get('/system', function(req, res, next) {
  res.send('respond with a resource');
});


module.exports = router;

