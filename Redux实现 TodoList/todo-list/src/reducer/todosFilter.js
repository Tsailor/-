const initialState = 'SHOW_ALL';  //  按条件筛选
function todosFilter(state = initialState, action){
    switch(action.type){
        case 'SET_VISIBILITY_FILTER' : return action.filter
        default: return state;
    }
}
export default todosFilter;