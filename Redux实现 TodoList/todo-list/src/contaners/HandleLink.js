import { connect } from 'react-redux';
import Link from '../components/Link.js';
import { checkFilter } from '../action/action.js';

const mapStateToProps = (state,ownProps)=>{
    //console.log(state)
    return{
    active:state.todosFilter === ownProps.filter
}}
const mapDispatchToProps = (dispatch,ownProps)=>({
        checkFilter : () =>(dispatch(checkFilter(ownProps.filter)))
})
const HandleLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link)
export default HandleLink;