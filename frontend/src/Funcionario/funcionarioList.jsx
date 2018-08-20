import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {getList, showUpdate, showDelete, showConfirm} from './funcionarioActions'

class FuncionarioList extends Component {

    componentWillMount (){
        this.props.getList()
    }

    renderRows (){
        const list = this.props.list || []
        return list.map(fun => (
            <tr key={fun.idFuncionario}>
                    <td>{fun.nomeFuncionario}</td>
                    <td>{fun.cpfFuncionario}</td>
                    <td>{fun.telefoneFuncionario}</td>
                    <td>{fun.loginFuncionario}</td>
                    <td>    
                        <button className='btn btn-warning' onClick={() => this.props.showUpdate(fun)}>
                            <i className='fa fa-pencil'></i>
                        </button>
                        <button className='btn btn-danger' onClick={() => this.props.showDelete(fun)}>
                            <i className='fa fa-trash-o'></i>
                        </button> 
                    </td>
            </tr>
        ))
    }

    render (){
        return (
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>CPF</th>
                            <th>Telefone</th>
                            <th>Login</th>
                            <th className= 'table-actions'>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => ({list: state.funcionario.list})
const mapDispatchToProps = dispacth => bindActionCreators({getList, showUpdate, showDelete}, dispacth)
export default connect(mapStateToProps, mapDispatchToProps)(FuncionarioList)