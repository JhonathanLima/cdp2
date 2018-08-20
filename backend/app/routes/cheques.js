module.exports =  function(app){        
    //recuperando todos os cheques   
    app.get('/cheques', function(req, res){
        app.app.controllers.cheques.cheques(app, req, res);       
    });

    app.post('/cheques', function(req, res){
        app.app.controllers.cheques.cheque_salvar(app,req,res);
    });

    app.delete('/cheques/*', function(req, res){
        app.app.controllers.cheques.cheque_delete(app, req, res);
    });
    app.put('/cheques/*', function(req, res){
        app.app.controllers.cheques.cheque_alterar(app, req, res);
    });
    

    // recuperando um cheque especifico
    app.get('/cheque', function(req, res){
        app.app.controllers.cheques.cheque(app, req, res);
        
    });
}