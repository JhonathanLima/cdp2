module.exports.pedidos = function (app, req, res){
    var connection = app.config.bdconnection();
    var pedidosDAO = new app.app.models.PedidosDAO(connection);

    pedidosDAO.getPedidos(function (error, result){
        res.json(result);
    });
}

module.exports.pedido_salvar = function(app, req, res){
    var pedido = req.body;

    
    var connection = app.config.bdconnection();
    var pedidosDAO = new app.app.models.PedidosDAO(connection);

    pedidosDAO.salvarPedido(pedido, function (error, result){
        res.send(result);
    });
}

module.exports.pedido_alterar = function (app, req, res) {
    var pedido = req.body;
    //deletando o campo dataPedido do json para não ter problemas com o formato da data na hora de alterar
    delete pedido.dataPedido
    
    var connection = app.config.bdconnection();
    var pedidosDAO = new app.app.models.PedidosDAO(connection);

    var idPedidos = req.body.idPedidos;

    pedidosDAO.alterarPedido(idPedidos,pedido,  function (error, result) {
        res.json(result)
    });

}

module.exports.pedido_delete = function (app, req, res) {
    var connection = app.config.bdconnection();
    var pedidosDAO = new app.app.models.PedidosDAO(connection);

    var idPedidos = req.param('0');
    pedidosDAO.deletePedido(idPedidos, function (error, result) {
        
        res.json(result)
    });

}

module.exports.pedido = function (app, req, res){
    var connection = app.config.bdconnection();
        var pedidosDAO = new app.app.models.PedidosDAO(connection);

        var idPedidos = req.query;

        pedidosDAO.getPedido(idPedidos, function(error, result){
            res.json(result)
        });

}