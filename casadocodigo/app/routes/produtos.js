module.exports = function(app) {
    app.get("/produtos",function(req, res) {
        var mysql = require('mysql');
        var connection = mysql.createConnection({
            host: "localhost",
            user: "root",
            password : "root",
            database: "casadocodigo_nodejs"
        });

        connection.query('select * from produtos', function(err, results){
            console.log(err);
            res.send(results);
        });

        connection.end();

    });
}