import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {reduxForm, Field} from 'redux-form'

import { init } from './pedidoActions'
import labelAndInput from '../common/form/labelAndInput'

class PedidoForm extends Component {

    render() {
        const {handleSubmit, readOnly} = this.props
        return (
            <form role= 'form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='nomeCliente' component= {labelAndInput} readOnly={readOnly}
                        label='Cliente' cols='12 4' placeholder='Informe o nome do cliente'/>
                    <Field name='cidadeCliente' component= {labelAndInput} readOnly={readOnly}
                        label='Cidade' cols='12 4' placeholder='Informe a cidade do cliente'/>
                    <Field name='estadoCliente' component= {labelAndInput} readOnly={readOnly}
                        label='Estado' cols='12 4' placeholder='Informe o estado do cliente'/>
                    <Field name='telefoneCliente' component= {labelAndInput} type= 'number' readOnly={readOnly}
                        label='Telefone' cols='12 4' placeholder='Informe o telefone do cliente'/>
                    <Field name='descricaoPedido' component= {labelAndInput} readOnly={readOnly}
                        label='Descrição' cols='12 4' placeholder='Informe a descrção do pedido'/>
                </div>
                <div className='box-footer'>
                    <button type='submit' className ={`btn btn-${this.props.submitClass}`}>
                        {this.props.submitLabel}
                    </button>
                    <button type='button' className ='btn btn-default'
                        onClick={this.props.init}>Cancelar</button>
                </div>
            </form>
        )
    }
}

PedidoForm= reduxForm({form: 'pedidoForm', destroyOnUnmount: false})(PedidoForm)
const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)
export default connect(null, mapDispatchToProps)(PedidoForm)