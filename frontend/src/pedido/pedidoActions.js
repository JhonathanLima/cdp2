import axios from 'axios'
import {toastr} from 'react-redux-toastr'
import {reset as resetForm, initialize} from 'redux-form'
import {showTabs, selectTab} from '../common/tab/tabActions'

const BASE_URL = 'http://localhost:3000'

const INITIAL_VALUES={}

export function getList () {
    return dispatch => {
        const request = axios.get(`${BASE_URL}/pedidos`).then(
            resp => dispatch({ type: 'PEDIDOS_FETCHED', payload: resp.data }))        
    }
}

export function create(values) {
    return submit(values, 'post')
}

export function update(values) {
    return submit(values, 'put')
}

export function remove(values) {
    
    return submit(values, 'delete')
}

export function confirm(values) {
    const value = [values.idPedidos, values.pedidoPendente = 0]
    console.log(value)
    return submit(value, 'put')
}

export function geraPdf(values){
    pdf = new pdf ('', 0, 0);
    pdf.setFontSize(18);
    pdf.addText(values);
    pdf.writeToFile('c: \\ myFile.pdf ');
}

function submit(values, method) {
    return dispatch =>{
       
        const id= values.idPedidos ? values.idPedidos : ''
        axios[method](`${BASE_URL}/pedidos/${id}`, values)
        .then(req => {
            toastr.success('Sucesso', 'Operação Realizada com sucesso')
            dispatch(init())
        })
        .catch(e => {
            e.response.data.errors.forEach(error => toastr.error('Erro', error))
        }) 
    }
}

export function showUpdate(pedido){
    return[
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('pedidoForm', pedido)
    ]
}

export function showDelete(pedido){
    return[
        showTabs('tabDelete'),
        selectTab('tabDelete'),
        initialize('pedidoForm', pedido)
    ]
}

export function showConfirm(pedido){
    return[
        showTabs('tabConfirm'),
        selectTab('tabConfirm'),
        initialize('pedidoForm', pedido)
    ]
}

export function init(){
    return [
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        getList(),
        initialize('pedidoForm', INITIAL_VALUES)
    ]
}