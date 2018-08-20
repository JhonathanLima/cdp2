import axios from 'axios'
import {toastr} from 'react-redux-toastr'
import {reset as resetForm, initialize} from 'redux-form'
import {showTabs, selectTab} from '../common/tab/tabActions'

const BASE_URL = 'http://localhost:3000'

const INITIAL_VALUES={}

export function getList () {
    return dispatch => {
        const request = axios.get(`${BASE_URL}/cheques`).then(
            resp => dispatch({ type: 'CHEQUE_FETCHED', payload: resp.data }))        
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
       
        const id= values.idCheques ? values.idCheques : ''
        axios[method](`${BASE_URL}/cheques/${id}`, values)
        .then(req => {
            toastr.success('Sucesso', 'Operação Realizada com sucesso')
            dispatch(init())
        })
        .catch(e => {
            e.response.data.errors.forEach(error => toastr.error('Erro', error))
        }) 
    }
}

export function showUpdate(cheque){
    return[
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('chequeForm', cheque)
    ]
}

export function showDelete(cheque){
    return[
        showTabs('tabDelete'),
        selectTab('tabDelete'),
        initialize('chequeForm', cheque)
    ]
}

export function showConfirm(cheque){
    return[
        showTabs('tabConfirm'),
        selectTab('tabConfirm'),
        initialize('chequeForm', cheque)
    ]
}

export function init(){
    return [
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        getList(),
        initialize('chequeForm', INITIAL_VALUES)
    ]
}