var express = require('express');
var router = express.Router();
var title = "MY PROJECRT"
    /* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: title });
});

router.get('/menu/getAll', function(req, res, next) {
    res.send('[{"name":"系统管理","url":"main.system","children":[{"name":"用户管理","url":"main.system.user"},{"name":"角色管理","url":"main.system.role"}]},{"name":"项目管理","url":"main.project","children":[{"name":"我的项目","url":"main.project.my"},{"name":"项目编辑","url":"main.project.edit"}]}]');
});


module.exports = router;
