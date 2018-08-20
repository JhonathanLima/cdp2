import axios from 'axios'
const BASE_URL = 'http://localhost:3000'

export function getSummary(){
    
    
    
    return dispatch =>  {
        
        const request = axios.get(`${BASE_URL}/`).then(resp => dispatch({ type: 'HOME_SUMMARY_FETCHED', payload: resp.data }))
       
        
    }
    
}
