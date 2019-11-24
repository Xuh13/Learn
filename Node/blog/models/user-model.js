var DB = require('./DB');

exports.insert_name = function (name,password,callback) {
    var sql = 'SELECT 1 + 1 AS solution';
    DB.query(sql,[name,password],callback);
}

exports.check_name_pwd=function(name,password,callback){
    var sql = 'SELECT * FROM user WHERE name=? and password = ?';
    DB.query(sql,[name,password],callback);
}