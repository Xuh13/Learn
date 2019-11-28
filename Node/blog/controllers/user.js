//把view中的reg.ejs渲染到浏览器  exports/module.exports  exports只能返回对象
var user_model = require('../models/user-model');

exports.reg = function (req, res, next) {
    res.render('reg');
}

exports.do_reg = function (req, res, next) {
    var account = req.body.email;
    var name = req.body.name; //post传输可以使用req.body来接收
    var password = req.body.pwd;

    user_model.insert_name(account,name, password, function (err, data) {
        res.redirect('login');
    });

}

exports.login = function (req, res, next) {
    res.render('login');
}

exports.do_login = function (req, res, next) {
    var account = req.body.email; //post传输可以使用req.body来接收
    var password = req.body.pwd;

    user_model.check_name_pwd(account, password, function (err, data) {
        if(data.length>0){
            req.session.id=data[0].USER_ID;
            req.session.nickname=data[0].NAME;
            console.log(req.session);
            res.redirect('/index');
        }else{
            console.log(123);
        }
    });
}

exports.index = function(req,res,next){
    res.render('index_logined',{'sess':req.session});
}

exports.unlogin=function(req,res,next){
    req.session = null;
    res.redirect('/index');
}

exports.checkname=function(req,res,next){
    var account = req.body.account;
    user_model.check_same_name(account,function(err,data){
        if(data.length>0){
            res.send('success');
        }else{
            res.send('error');
        }
    });
}