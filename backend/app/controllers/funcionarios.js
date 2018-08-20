module.exports.funcionarios = function (app, req, res){
    var connection = app.config.bdconnection();
    var funcionariosDAO = new app.app.models.FuncionariosDAO(connection);

    funcionariosDAO.getFuncionarios(function (error, result){
        res.json(result);
    });
}
module.exports.funcionario_salvar = function(app, req, res){
    var funcionario = req.body;

    //validando dados do cadastro de um funcionairo.
    req.assert('nomeFuncionario', 'Nome é obrigatório').notEmpty();
    req.assert('cpfFuncionario', 'CPF é obrigatório').notEmpty();
    req.assert('loginFuncionario', 'Login é é obrigatório').notEmpty();
    req.assert('senhaFuncionario', 'Senha do cheque é obrigatório').notEmpty();
    //recuperando os erros que foram gerados por não preencher os dados de cadastro de funcionario.
    var erros = req.validationErrors();

    if(erros){
        //enviando os erros para a tela adicionar funcionario
        res.render("admin/formAddFuncionario", {validacao : erros, funcionario : funcionario});
        return erros;
    }
    
    var connection = app.config.bdconnection();
    var funcionariosDAO = new app.app.models.FuncionariosDAO(connection);

    funcionariosDAO.salvarFuncionario(funcionario, function (error, result){
        res.redirect('/funcionarios');
    });
}

module.exports.funcionario_delete = function (app, req, res) {
    var connection = app.config.bdconnection();
    var funcionariosDAO = new app.app.models.FuncionariosDAO(connection);

    var idFuncionario = req.param('0');

    funcionariosDAO.deleteFuncionario(idFuncionario, function (error, result) {
        res.json(result)
    });

}

module.exports.funcionario_alterar = function (app, req, res) {
    var funcionario = req.body;
    var connection = app.config.bdconnection();
    var funcionariosDAO = new app.app.models.FuncionariosDAO(connection);

    var idFuncionario = req.body.idFuncionario;
    
    funcionariosDAO.alterarFuncionario(idFuncionario,funcionario,  function (error, result) {
        res.json(result)
    });

}

module.exports.funcionario_autenticar = function (app, req, res){
    var connection = app.config.bdconnection();
        var funcionariosDAO = new app.app.models.FuncionariosDAO(connection);

        var funcionario = req.body
        console.log(req.body)

        funcionariosDAO.verificaLogin(funcionario, function(error, result){
            res.json(result);
        });

}

module.exports.funcionario = function (app, req, res){
    var connection = app.config.bdconnection();
        var funcionariosDAO = new app.app.models.FuncionariosDAO(connection);

        var idFuncionario = req.query;

        funcionariosDAO.getFuncionarios(idFuncionario, function(error, result){
            res.json(result);
        });

}