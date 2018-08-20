function PedidosDAO(connection){
    this._connection = connection;
}

//rescupera todos os pedidos da tabela pedidos
PedidosDAO.prototype.getPedidos= function(callback){
    this._connection.query('select idPedidos,nomeCliente,cidadeCliente,estadoCliente,telefoneCliente,descricaoPedido,DATE_FORMAT(dataPedido, "%d/%m/%Y" ) as dataPedido,pedidoPendente from pedidos order by dataPedido desc', callback);
}

//recupera os 5 ultimos itens da view pedidosview
PedidosDAO.prototype.get6UltimosPedidos = function(callback){
    this._connection.query('select * from pedidosview where pedidoPendente=1 order by dataPedido desc limit 6 ',callback)
}

PedidosDAO.prototype.getPedido = function(idPedidos, callback){
    this._connection.query('select * from pedidos where idPedidos =' + idPedidos.idPedidos, callback );
}

PedidosDAO.prototype.salvarPedido = function(pedido, callback){
    this._connection.query('insert into pedidos set ? ', pedido, callback);
}

PedidosDAO.prototype.deletePedido = function(idPedidos, callback){
    this._connection.query('delete from pedidos where idPedidos =' + idPedidos, callback );
}

PedidosDAO.prototype.alterarPedido = function(idPedidos,pedido, callback){
    this._connection.query('update pedidos set ? where idPedidos =' + idPedidos, pedido, callback );
}
module.exports = function(){    
    return PedidosDAO;
}