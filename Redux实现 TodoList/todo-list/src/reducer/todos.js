const initialState = []  //  存放todos
function todos(state = initialState, action){
   
    switch(action.type){
        case "ADD_TODO" : return state.concat({text : action.text, id : action.id, completed : false});
        case "TOGGLE_TODO" : return state.map((v) =>( v.id === action.id ? {...v, completed :!v.completed} : v))
        default : return state;
    }
   
}
export default todos;