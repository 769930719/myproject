var express = require('express');
var router = express.Router();
var title="MY PROJECRT"
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: title });
});

router.get('/menu/getAll', function(req, res, next) {
 res.send('[{"name":"系统管理","url":"","children":[{"name":"用户管理","url":"#/main/users"},{"name":"角色管理","url":"#/main/roles"}]},{"name":"项目管理","url":"","children":[{"name":"我的项目","url":"#/main/users"},{"name":"项目编辑","url":"#/main/roles"}]}]');
});


module.exports = router;


