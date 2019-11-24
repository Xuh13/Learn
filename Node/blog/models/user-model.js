var DB = require('./DB');

exports.insert_name = function (name,password,callback) {
    var sql = 'SELECT 1 + 1 AS solution';
    DB.query(sql,[name,password],callback);
}