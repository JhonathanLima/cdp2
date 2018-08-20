import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {reduxForm, Field, formValueSelector} from 'redux-form'

import { init } from './estoqueActions'
import labelAndInput from '../common/form/labelAndInput'
import ItemList from './itemList'
import Summary from './summary'

class EstoqueForm extends Component {
    
   calculateSummary(){
        const sum =(t,v) => t+v
        return{
            sumOfEntradas: this.props.entradas.map(d  => +d || 0).reduce(sum),
            sumOfSaidas: this.props.saidas.map(s => +s || 0 ).reduce(sum)   
        }
    }
    
    render() {
        const {handleSubmit, readOnly, entradas, saidas} = this.props
        const { sumOfEntradas, sumOfSaidas} = this.calculateSummary()
        return (
            <form role= 'form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='mesEstoque' component= {labelAndInput} readOnly={readOnly}
                        label='Mês' cols='12 3' placeholder='Informe o mês'/>
                    <Field name='anoEstoque' component= {labelAndInput} readOnly={readOnly}
                        label='Ano' cols='12 3' placeholder='Informe o ano'/>
                    <Field name='entradaEstoque' component= {labelAndInput} readOnly={readOnly}
                        label='Entrada' values={entradas} cols='12 3' placeholder='Informe a entrada'/>
                    <Field name='saidaEstoque' component= {labelAndInput} readOnly={readOnly}
                        label='Saida' cols='12 3' placeholder='Informe a saida'/>
                    <Summary entradas={sumOfEntradas} saidas={sumOfSaidas}/>
                    <ItemList cols='12 6' list={entradas} readOnly={readOnly}
                        field='entradas' legends='Entradas'/>
                    <ItemList cols='12 6' list={saidas} readOnly={readOnly}
                        field='saidas' legends='Saidas'/>
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

EstoqueForm= reduxForm({form: 'estoqueForm', destroyOnUnmount: false})(EstoqueForm)
const selector = formValueSelector('estoqueForm')
const mapStateToProps = state =>({
    entradas: selector (state, 'entradas'),
    saidas: selector (state,'saidas')
})
const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(EstoqueForm)
