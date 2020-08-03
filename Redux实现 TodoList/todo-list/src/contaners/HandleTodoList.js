import { connect } from 'react-redux';
import TodoList from '../components/TodoList.js';
import { toggleTodo } from '../action/action.js'

const getNewStateByFilter = (state,filter)=>{
    switch(filter){
        case "SHOW_ALL" : return state
        case "SHOW_COMPLETED" : return state.filter((v)=>v.completed)
        case "SHOW_UNCOMPLETED" : return state.filter((v)=>!v.completed)
        default : return state;
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        toggleTodo: (id)=>{
            dispatch(toggleTodo(id))
        }
    }
}
const mapStateToProps = (state)=>({
    todos:getNewStateByFilter(state.todos, state.todosFilter)
})
const HandleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)

export default HandleTodoList;