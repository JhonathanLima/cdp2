function EstoqueDAO(connection){
    this._connection = connection;
}

EstoqueDAO.prototype.getEstoque= function(callback){
    this._connection.query('select *  from estoque order by mesEstoque desc', callback);
}

EstoqueDAO.prototype.salvarEstoque = function(estoque, callback){
    this._connection.query('insert into estoque set ? ', estoque, callback);
}

EstoqueDAO.prototype.deleteEstoque = function(idEstoque, callback){
    this._connection.query('delete from estoque where idEstoque =' + idEstoque, callback );
}

EstoqueDAO.prototype.alterarEstoque = function(idEstoque,estoque, callback){
    this._connection.query('update estoque set ? where idEstoque =' + idEstoque, estoque, callback );
}

module.exports = function(){    
    return EstoqueDAO;
}