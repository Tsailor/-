import { connect } from 'react-redux';
import TodoHeader from '../components/TodoHeader.js';
import {addTodo} from '../action/action.js'

// const mapDispatchToProps = (dispatch)=>{
//     return {
//         onAddTodo: (value)=>{
//             console.log(value)
//         }
//     }
// }
const mapDispatchToProps = (dispatch) =>({
    onAddTodo:(value) =>dispatch(addTodo(value))
})   
const handleTodoHeader = connect(
    null,
    mapDispatchToProps
)(TodoHeader)

export default handleTodoHeader;