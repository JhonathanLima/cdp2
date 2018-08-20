import {combineReducers} from 'redux'
import { reducer as formReducer} from 'redux-form'
import { reducer as toastrReducer} from 'react-redux-toastr'

import EstoqueReducer from '../estoque/estoqueReducer'
import PedidoReducer from '../pedido/pedidoReducer'
import ChequeReducer from '../cheque/chequeReducer'
import FuncionarioReducer from '../funcionario/funcionarioReducer'
import LoginReducer from '../login/loginReducer'
import HomeReducer from '../home/homeReducer'
import TabReducer from '../common/tab/tabReducer'



const rootReducer = combineReducers({
    estoque: EstoqueReducer,
    pedido : PedidoReducer,
    cheque: ChequeReducer,
    funcionario: FuncionarioReducer,
    login: LoginReducer,
    home: HomeReducer,
    tab: TabReducer,
    form: formReducer,
    toastr: toastrReducer,
})

export default rootReducer