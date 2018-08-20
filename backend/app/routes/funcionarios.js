module.exports = function (app) {
    //recuperando todos os funcionarios   
    app.get('/funcionarios', function (req, res) {
        app.app.controllers.funcionarios.funcionarios(app, req, res);
    });
    app.post('/funcionarios', function (req, res) {
        app.app.controllers.funcionarios.funcionario_salvar(app, req, res);
    });
    app.delete('/funcionarios/*', function(req, res){
        app.app.controllers.funcionarios.funcionario_delete(app, req, res);
    });
    app.put('/funcionarios/*', function(req, res){
        app.app.controllers.funcionarios.funcionario_alterar(app, req, res);
    });
    app.post('/autenticar'),function(req, res){
        app.app.controllers.funcionarios.funcionario_autenticar(app, req, res);
    }

    // recuperando um funcionario especifico
    app.get('/funcionario', function (req, res) {
        app.app.controllers.funcionarios.funcionario(app, req, res);

    });

}