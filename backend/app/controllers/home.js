module.exports.index = function (app, req, res){

    //criando a conexão com o banco de dados
    var connection = app.config.bdconnection();
    var pedidosDAO = new app.app.models.PedidosDAO(connection);

    pedidosDAO.get6UltimosPedidos(function(error, result){
        res.json(result);
    });

    
}