function FuncionariosDAO(connection){
    this._connection = connection;
}

FuncionariosDAO.prototype.getFuncionarios= function(callback){
    this._connection.query('select *  from funcionarios order by nomeFuncionario asc ', callback);
}

FuncionariosDAO.prototype.getFuncionario = function(idFuncionario, callback){
    this._connection.query('select * from funcionarios where idFuncionario =' + idFuncionario.idFuncionario, callback );
}

FuncionariosDAO.prototype.salvarFuncionario = function(funcionario, callback){
    this._connection.query('insert into funcionarios set ? ', funcionario, callback);
}

FuncionariosDAO.prototype.deleteFuncionario = function(idFuncionario, callback){
    this._connection.query('delete from funcionarios where idFuncionario =' + idFuncionario, callback );
}

FuncionariosDAO.prototype.alterarFuncionario = function(idFuncionario,funcionario, callback){
    this._connection.query('update funcionarios set ? where idFuncionario =' + idFuncionario, funcionario, callback );
}

FuncionariosDAO.prototype.verificaLogin =function(funcionario, callback){
    this._connection.query('select loginFuncionario,senhaFuncionario from funcionario where ?' + funcionario)
}

module.exports = function () {
    return FuncionariosDAO;
}