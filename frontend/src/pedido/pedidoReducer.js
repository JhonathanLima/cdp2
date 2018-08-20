const INITIAL_STATE = {list: []}

export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        case 'PEDIDOS_FETCHED':
            return { ...state, list: action.payload }
        default: 
            return state
    }
}