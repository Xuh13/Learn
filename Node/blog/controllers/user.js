//把view中的reg.ejs渲染到浏览器  exports/module.exports  exports只能返回对象
var user_model = require('../models/user-model');

exports.reg = function (req, res, next) {
    res.render('reg');
}

exports.do_reg = function (req, res, next) {
    var name = req.body.name; //post传输可以使用req.body来接收
    var password = req.body.psw;

    user_model.insert_name(name, password, function (err, data) {
        res.redirect('login');
    });

}

exports.login = function (req, res, next) {
    res.render('login');
}

exports.do_login = function (req, res, next) {
    var name = req.body.name; //post传输可以使用req.body来接收
    var password = req.body.psw;

    user_model.check_name_pwd(name, password, function (err, data) {
        if(data.length()>0){
            req.session.name = data.name;
            req.session.password = data.password;
            res.redirect('index',[])
        }
    });
}

exports.index = function(req,res,next){
    res.render('index',[{'sess':req.session}]);
}

exports.unlogin=function(req,res,next){
    req.session = null;
    res.redirect('/index');
}