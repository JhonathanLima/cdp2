var mysql = require('mysql');

var connMysql = function(){
    return mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : 'jhonathan',
        database : 'sistemacdpteste'
    });
}

module.exports =  function (){
   return connMysql;
}