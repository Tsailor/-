import React from 'react';
import PropTypes from 'prop-types' ;
import { connect} from 'react-redux';
import { getAllProducts } from '../reducers/products';
const ProductContainer=(props)=>{
    let { products } = props;
    console.log(products)
    return(
    <div> {products.map((v)=><li key={v.id}>{v.title}</li>)}
        </div>
    )
}
ProductContainer.propTypes = {
    products : PropTypes.arrayOf(PropTypes.shape({
        id : PropTypes.number,
        title : PropTypes.string,
        price : PropTypes.number,
        inventory : PropTypes.number,
    })).isRequired
}
const mapStateToProps = (state)=>({
    products : getAllProducts(state.products)  // store 状态包含两部分： products 和 carts
})
// const mapDispatchToProps = (dispatch)=>{

// }
export default connect( mapStateToProps, null )(ProductContainer)