import { createStore } from 'redux';

const initialState = {
    test: 'this test state'
}
const reducer = (state = initialState, action ) => {
    console.log('reducer', action, state );
    return state;
}

const store = createStore(reducer);

export default store;
