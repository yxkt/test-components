import { createStore } from 'redux'
const init = {
    count: 0,
}
function reducer(state = init, action: any) {
    // console.log(action);

    switch (action.type) {
        case 'add':
            return {
                ...state,
                count: ++state.count,
            }
        default:
            return state
    }

}
let store = createStore(reducer)
export default store