import axios from 'axios'
import {toastr} from 'react-redux-toastr'
import {reset as resetForm, initialize} from 'redux-form'
import {showTabs, selectTab} from '../common/tab/tabActions'

const BASE_URL = 'http://localhost:3000'

const INITIAL_VALUES={entradas: [{}], saidas: [{}]}

export function getList () {
    return dispatch => {
        const request = axios.get(`${BASE_URL}/estoque`).then(
            resp => dispatch({ type: 'ESTOQUE_SUMMARY_FETCHED', payload: resp.data }))        
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


function submit(values, method) {
    return dispatch =>{
       
        const id= values.idEstoque ? values.idEstoque : ''
        axios[method](`${BASE_URL}/estoque/${id}`, values)
        .then(req => {
            toastr.success('Sucesso', 'Operação Realizada com sucesso')
            dispatch(init())
        })
        .catch(e => {
            e.response.data.errors.forEach(error => toastr.error('Erro', error))
        }) 
    }
}

export function showUpdate(estoque){
    return[
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('estoqueForm', estoque)
    ]
}

export function showDelete(estoque){
    return[
        showTabs('tabDelete'),
        selectTab('tabDelete'),
        initialize('estoqueForm', estoque)
    ]
}

export function showConfirm(estoque){
    return[
        showTabs('tabConfirm'),
        selectTab('tabConfirm'),
        initialize('estoqueForm', estoque)
    ]
}

export function init(){
    return [
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        getList(),
        initialize('estoqueForm', INITIAL_VALUES)
    ]
}