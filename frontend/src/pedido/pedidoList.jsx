import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {getList, showUpdate, showDelete, showConfirm,geraPdf} from './pedidoActions'

class PedidoList extends Component {

    componentWillMount (){
        this.props.getList()
    }

    renderRows (){
        const list = this.props.list || []
        return list.map(pe => (
            <tr key={pe.idPedidos}>
                    <td>{pe.nomeCliente}</td>
                    <td>{pe.cidadeCliente}</td>
                    <td>{pe.estadoCliente}</td>
                    <td>{pe.dataPedido}</td>
                    <td>{pe.descricaoPedido}</td>
                    <td>    
                        <button className='btn btn-success' onClick={() => this.props.geraPdf(pe)}>
                            <i className='fa fa-check'></i>
                        </button>
                        <button className='btn btn-warning' onClick={() => this.props.showUpdate(pe)}>
                            <i className='fa fa-pencil'></i>
                        </button>
                        <button className='btn btn-danger' onClick={() => this.props.showDelete(pe)}>
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
                            <th>Cliente</th>
                            <th>Cidade</th>
                            <th>Estado</th>
                            <th>Data</th>
                            <th>Descrição</th>
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

const mapStateToProps = state => ({list: state.pedido.list})
const mapDispatchToProps = dispacth => bindActionCreators({getList, showUpdate, showDelete, showConfirm, geraPdf}, dispacth)
export default connect(mapStateToProps, mapDispatchToProps)(PedidoList)