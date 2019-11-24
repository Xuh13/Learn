var express = require('express');
var router = express.Router();
var user = require('../controllers/user');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/main',function(req, res, next){
  res.render('main',{name:['aaaa','bbb','ccc']});
})

router.get('/reg',user.reg);
router.post('/reg',user.do_reg);

module.exports = router;
