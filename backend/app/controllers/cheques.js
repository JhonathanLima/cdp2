module.exports.cheques = function (app, req, res){
    var connection = app.config.bdconnection();
    var chequesDAO = new app.app.models.ChequesDAO(connection);

    chequesDAO.getCheques(function (error, result){
        res.json(result);
    });
}

module.exports.cheque_salvar = function(app, req, res){
    var cheque = req.body;

    var connection = app.config.bdconnection();
    var chequesDAO = new app.app.models.ChequesDAO(connection);

    chequesDAO.salvarCheque(cheque, function (error, result){
        res.send(result);
    });
}

module.exports.cheque_delete = function (app, req, res) {
    var connection = app.config.bdconnection();
    var chequesDAO = new app.app.models.ChequesDAO(connection);

    var idCheques = req.param('0');

    chequesDAO.deleteCheque(idCheques, function (error, result) {
        res.json(result)
    });

}


module.exports.cheque_alterar = function (app, req, res) {
    var cheque = req.body;
    var connection = app.config.bdconnection();
    var chequesDAO = new app.app.models.ChequesDAO(connection);

    var idCheques = req.body.idCheques;

    chequesDAO.alterarCheque(idCheques,cheque,  function (error, result) {
        res.json(result)
    });

}

module.exports.cheque = function (app, req, res){
    var connection = app.config.bdconnection();
        var chequesDAO = new app.app.models.ChequesDAO(connection);

        var idCheques = req.query;

        chequesDAO.getCheque(idCheques, function(error, result){
            res.render("cheques/cheque", {cheques : result});
        });

}