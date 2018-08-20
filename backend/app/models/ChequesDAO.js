function ChequesDAO(connection){
    this._connection = connection;
}

ChequesDAO.prototype.getCheques= function(callback){
    this._connection.query('select idCheques, bancoCheque,agenciaCheque,contaCheque,numeroCheque,valorCheque, DATE_FORMAT(dataVencCheque, "%d/%m/%Y" ) as dataVencCheque,tipoCheque  from cheques order by dataVencCheque desc ', callback);
}

ChequesDAO.prototype.getCheque = function(idCheques, callback){
    this._connection.query('select * from cheques where idCheques =' + idCheques.idCheques, callback );
}

ChequesDAO.prototype.salvarCheque = function(cheque, callback){
    this._connection.query('insert into cheques set ? ', cheque, callback);
}

ChequesDAO.prototype.deleteCheque = function(idCheques, callback){
    this._connection.query('delete from cheques where idCheques =' + idCheques, callback );
}

ChequesDAO.prototype.alterarCheque = function(idCheques,cheque, callback){
    this._connection.query('update cheques set ? where idCheques =' + idCheques, cheque, callback );
}

module.exports = function(){    
    return ChequesDAO;
}