module.exports.estoque = function (app, req, res){
    var connection = app.config.bdconnection();
    var estoqueDAO = new app.app.models.EstoqueDAO(connection);

    estoqueDAO.getEstoque(function (error, result){
        res.json(result);
    });
}

module.exports.estoque_salvar = function(app, req, res){
    var estoque = req.body;

    delete estoque.entradas
    delete estoque.saidas

    
    var connection = app.config.bdconnection();
    var estoqueDAO = new app.app.models.EstoqueDAO(connection);
    

    estoqueDAO.salvarEstoque(estoque, function (error, result){
        res.json(result);
    });
}

module.exports.estoque_delete = function (app, req, res) {
    var connection = app.config.bdconnection();
    var estoqueDAO = new app.app.models.EstoqueDAO(connection);

    var idEstoque = req.param('0');

    estoqueDAO.deleteEstoque(idEstoque, function (error, result) {
        res.json(result)
    });

}

module.exports.estoque_alterar = function (app, req, res) {
    var estoque = req.body;
    var connection = app.config.bdconnection();
    var estoqueDAO = new app.app.models.EstoqueDAO(connection);

    var idEstoque = req.body.idEstoque;

    estoqueDAO.alterarEstoque(idEstoque,estoque,  function (error, result) {
        res.json(result)
    });

}