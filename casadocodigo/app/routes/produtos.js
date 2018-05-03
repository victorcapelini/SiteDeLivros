module.exports = function (app) {
    app.get("/produtos", function (req, res) {
        var connection = app.infra.connectionFactory();
        var produtosBanco = new app.infra.ProdutosDao(connection);

        produtosBanco.lista(function (err, results) {
            res.render('produtos/lista', { lista: results });
        });

        connection.end();

    });

    app.get('produtos/remove', function(){

        var connection = app.infra.connectionFactory;
        var produtosBanco = app.infra.produtosBanco;
        var produto = produtosBanco.carrega(id,callback);
    
        if(produto){
            produtosBanco.remove(produto,callback);
        }
    
    });
}