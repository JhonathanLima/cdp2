module.exports =  function(app){        
//recuperando todos os pedidos   
    app.get('/pedidos', function(req, res){
        app.app.controllers.pedidos.pedidos(app, req, res);  
    });
    app.post('/pedidos', function(req, res){
        app.app.controllers.pedidos.pedido_salvar(app, req, res);
    });
    app.delete('/pedidos/*', function(req, res){
        app.app.controllers.pedidos.pedido_delete(app, req, res);
    });
    app.put('/pedidos/*', function(req, res){
        app.app.controllers.pedidos.pedido_alterar(app, req, res);
    });

// recuperando um pedido especifico
    app.get('/pedido', function(req, res){
        app.app.controllers.pedidos.pedido(app, req, res);
        
    });
    
}