module.exports = function (app) {
    var listaProdutos = function (req, res) {
        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDao(connection);

        produtosDAO.lista(function (err, results) {
            res.format({
                html: function () {
                    res.render('produtos/lista', { lista: results });
                },
                json: function () {
                    res.json(resultados);
                }
            });

        })

        connection.end();
    };

    app.get("/produtos", listaProdutos);

    app.get('/produtos/form', function (req, res) {
        res.render('produtos/form',
            { errosValidacao: {},produto:{} });
    });

    app.post('/produtos', function (req, res) {
        var produto = req.body;

        req.assert('titulo', 'Titulo é obrigatório').notEmpty();
        req.assert('preco', 'Formato inválido').isFloat();
        var erros = req.validationErrors();

        if(errors){
            res.status(400);
                 res.format({
                   html: function(){
                       res.render("produtos/form",{validationErrors:errors,produto:produto});
                   },
                   json: function(){
                       res.send(errors);
                   }
               });
               return;
           }

        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDao(connection);
        produtosDAO.salva(produto, function (erros, resultados) {
            res.redirect('/produtos');
        });
    });
}