var express = require('express');
var router = express.Router();
var user = require('../controllers/user');

function checklogin(){
  if(sess.name){
    next();
  }else{
    res.redirect('/login');
  }
}

router.get('/login',user.login);
router.post('/login',user.do_login);

router.get('/reg',user.reg);
router.post('/reg',user.do_reg);

router.get('/index',checklogin);
router.get('/index',user.index);

router.get('/unlogin',user.unlogin);
module.exports = router;
