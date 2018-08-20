import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {reduxForm, Field} from 'redux-form'

import { init } from './funcionarioActions'
import labelAndInput from '../common/form/labelAndInput'

class FuncionarioForm extends Component {

    render() {
        const {handleSubmit, readOnly} = this.props
        return (
            <form role= 'form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='nomeFuncionario' component= {labelAndInput} readOnly={readOnly}
                        label='Nome' cols='12 4' placeholder='Informe o nome do funcionario'/>
                    <Field name='cpfFuncionario' component= {labelAndInput} type= 'number' readOnly={readOnly}
                        label='CPF' cols='12 4' placeholder='Informe o CPF do funcionario'/>
                    <Field name='telefoneFuncionario' component= {labelAndInput} type= 'number' readOnly={readOnly}
                        label='Telefone' cols='12 4' placeholder='Informe o telefone do funcionario'/>
                    <Field name='emailFuncionario' component= {labelAndInput} readOnly={readOnly}
                        label='Email' cols='12 4' placeholder='Informe o email do funcionario'/>
                    <Field name='loginFuncionario' component= {labelAndInput} readOnly={readOnly}
                        label='Login' cols='12 4' placeholder='Informe o Login do funcionario'/>
                    <Field name='senhaFuncionario' component= {labelAndInput} type= 'password'readOnly={readOnly}
                        label='Senha' cols='12 4' placeholder='Informe a senha do funcionario'/>
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

FuncionarioForm= reduxForm({form: 'funcionarioForm', destroyOnUnmount: false})(FuncionarioForm)
const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)
export default connect(null, mapDispatchToProps)(FuncionarioForm)