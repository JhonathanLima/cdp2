const INITIAL_STATE = {summary: []}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'HOME_SUMMARY_FETCHED':
            return {...state, summary: action.payload}
        default:
            return state
    }
}