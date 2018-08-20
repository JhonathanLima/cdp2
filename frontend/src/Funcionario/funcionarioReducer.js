const INITIAL_STATE = {list: []}

export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        case 'FUNCIONARIO_FETCHED':
            return { ...state, list: action.payload }
        default: 
            return state
    }
}