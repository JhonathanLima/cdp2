import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {getList, showUpdate, showDelete, showConfirm} from './chequeActions'

class ChequeList extends Component {

    componentWillMount (){
        this.props.getList()
    }

    renderRows (){
        const list = this.props.list || []
        return list.map(ch => (
            <tr key={ch.idCheques}>
                    <td>{ch.bancoCheque}</td>
                    <td>{ch.valorCheque}</td>
                    <td>{ch.dataVencCheque}</td>
                    <td>{ch.tipoCheque}</td>
                    <td>    
                        <button className='btn btn-warning' onClick={() => this.props.showUpdate(ch)}>
                            <i className='fa fa-pencil'></i>
                        </button>
                        <button className='btn btn-danger' onClick={() => this.props.showDelete(ch)}>
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
                            <th>Banco</th>
                            <th>Valor</th>
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

const mapStateToProps = state => ({list: state.cheque.list})
const mapDispatchToProps = dispacth => bindActionCreators({getList, showUpdate, showDelete, showConfirm}, dispacth)
export default connect(mapStateToProps, mapDispatchToProps)(ChequeList)