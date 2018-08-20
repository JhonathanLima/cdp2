import axios from 'axios'
import {toastr} from 'react-redux-toastr'
import {reset as resetForm, initialize} from 'redux-form'
import {showTabs, selectTab} from '../common/tab/tabActions'

const BASE_URL = 'http://localhost:3000'

const INITIAL_VALUES={}

export function getList () {
    return dispatch => {
        const request = axios.get(`${BASE_URL}/funcionarios`).then(
            resp => dispatch({ type: 'FUNCIONARIO_FETCHED', payload: resp.data }))        
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
       
        const id= values.idFuncionario ? values.idFuncionario : ''
        axios[method](`${BASE_URL}/funcionarios/${id}`, values)
        .then(req => {
            toastr.success('Sucesso', 'Operação Realizada com sucesso')
            dispatch(init())
        })
        .catch(e => {
            e.response.data.errors.forEach(error => toastr.error('Erro', error))
        }) 
    }
}

export function showUpdate(funcionario){
    return[
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('funcionarioForm', funcionario)
    ]
}

export function showDelete(funcionario){
    return[
        showTabs('tabDelete'),
        selectTab('tabDelete'),
        initialize('funcionarioForm', funcionario)
    ]
}

export function showConfirm(funcionario){
    return[
        showTabs('tabConfirm'),
        selectTab('tabConfirm'),
        initialize('funcionarioForm', funcionario)
    ]
}

export function init(){
    return [
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        getList(),
        initialize('funcionarioForm', INITIAL_VALUES)
    ]
}