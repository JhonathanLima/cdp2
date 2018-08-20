import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {reduxForm, Field} from 'redux-form'

import { init } from './loginActions'
import labelAndInput from '../common/form/labelAndInput'

class LoginForm extends Component {

    render() {
        const {handleSubmit, readOnly} = this.props
        return (
            <form role= 'form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='loginFuncionario' component= {labelAndInput} readOnly={readOnly}
                        label='Login' cols='12 4' placeholder='Informe o login'/>
                    <Field name='senhaFuncionario' component= {labelAndInput} readOnly={readOnly}
                        label='Senha' cols='12 4' placeholder='Informe a senha do cheque'/>
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

LoginForm= reduxForm({form: 'loginForm', destroyOnUnmount: false})(LoginForm)
const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)
export default connect(null, mapDispatchToProps)(LoginForm)