module.exports =  function(app){        
    //recuperando todos os estoque   
    app.get('/estoque', function(req, res){
        app.app.controllers.estoque.estoque(app, req, res);       
    });

    app.post('/estoque', function(req, res){
        app.app.controllers.estoque.estoque_salvar(app,req,res);
    });

    app.delete('/estoque/*', function(req, res){
        app.app.controllers.estoque.estoque_delete(app, req, res);
    });
    app.put('/estoque/*', function(req, res){
        app.app.controllers.estoque.estoque_alterar(app, req, res);
    });
    

}