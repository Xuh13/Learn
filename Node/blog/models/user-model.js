var DB = require('./DB');

exports.insert_name = function (account,name,password,callback) {
    var sql = 'insert into t_users(ACCOUNT,PASSWORD,NAME) values (?,?,?)';
    DB.query(sql,[account,password,name],callback);
}

exports.check_name_pwd=function(account,password,callback){
    var sql = 'select * from t_users WHERE ACCOUNT=? and PASSWORD = ?';
    DB.query(sql,[account,password],callback);
}

exports.check_same_name=function(account,callback){
    var sql = 'select * from t_users where ACCOUNT= ?';
    DB.query(sql,[account],callback);
}