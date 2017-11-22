function gyms(state=[], action) {
    switch( action.type ) {
        case "ADD_GYM" :
            const index = action.index;
            return [
                ...state,
                { name: action.name, location: action.location }
            ];
        default:
            return state;
    }
    return state;
}
export default gyms;
