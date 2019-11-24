//把view中的reg.ejs渲染到浏览器  exports/module.exports  exports只能返回对象
var user_model=require('../models/user-model');

exports.reg = function (req, res, next) {
    res.render('reg');
}

exports.do_reg = function (req, res, next) {
    var name = req.body.name; //post传输可以使用req.body来接收
    var password = req.body.psw;
    
    user_model.insert_name(name,password,function(err,data){
        console.log(data);
    });

}