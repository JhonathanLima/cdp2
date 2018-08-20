import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {reduxForm, Field} from 'redux-form'

import { init } from './chequeActions'
import labelAndInput from '../common/form/labelAndInput'

class ChequeForm extends Component {

    render() {
        const {handleSubmit, readOnly} = this.props
        return (
            <form role= 'form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='bancoCheque' component= {labelAndInput} readOnly={readOnly}
                        label='Banco' cols='12 4' placeholder='Informe o banco do cheque'/>
                    <Field name='agenciaCheque' component= {labelAndInput} readOnly={readOnly}
                        label='Agência' cols='12 4' placeholder='Informe a agencia do cheque'/>
                    <Field name='contaCheque' component= {labelAndInput} readOnly={readOnly}
                        label='Conta' cols='12 4' placeholder='Informe a conta do cheque'/>
                    <Field name='numeroCheque' component= {labelAndInput} type= 'number' readOnly={readOnly}
                        label='Nº Cheque' cols='12 4' placeholder='Informe o numero do cheque'/>
                    <Field name='valorCheque' component= {labelAndInput} readOnly={readOnly}
                        label='Valor' cols='12 4' placeholder='Informe o valor do cheque'/>
                    <Field name='dataVencCheque' component= {labelAndInput} type= 'date'readOnly={readOnly}
                        label='Vencimento' cols='12 4' placeholder='Informe o vencimento do cheque'/>
                    <Field name='tipoCheque' component= {labelAndInput} readOnly={readOnly}
                        label='Descrição' cols='12 4' placeholder='Informe a descrição do cheque'/>
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

ChequeForm= reduxForm({form: 'chequeForm', destroyOnUnmount: false})(ChequeForm)
const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)
export default connect(null, mapDispatchToProps)(ChequeForm)