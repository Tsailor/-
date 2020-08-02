const initialState = []  //  存放todos
function todos(state = initialState, action){
    console.log(state)
    switch(action.type){
        case "ADD_TODO" : return state.concat({text : action.text, id : action.id, completed : false})
        default : return state;
    }
   
}
export default todos;