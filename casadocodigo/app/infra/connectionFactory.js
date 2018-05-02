var mysql = require('mysql');

function createDbConnection () {
    return mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        database: "casadocodigo_nodejs"
    });
}

module.exports = function(){
    return createDbConnection;
}