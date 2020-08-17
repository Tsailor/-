import React from 'react';
import PropTypes from 'prop-types' ;
import { connect} from 'react-redux';
import { getAllProducts } from '../reducers/products';
import ProductsItem from '../components/ProductsItem';
import { addProductToCartSafety } from '../actions/index';
// import { addProductToCart } from '../actions/index';
import '../styles/App.css'
const ProductContainer=(props)=>{
    let { products, addToCart } = props;
    return(
        <div> 
            <ul className='product-panel'>
                {products.map(( product) => <ProductsItem key={product.id} data={product} onaddToCartClick = {addToCart } />)}
                
            </ul>
        </div>
    )
}
ProductContainer.propTypes = {
    products : PropTypes.arrayOf(PropTypes.shape({
        id : PropTypes.number.isRequired,
        title : PropTypes.string.isRequired,
        price : PropTypes.number.isRequired,
        inventory : PropTypes.number.isRequired,
    })).isRequired,
    addToCart : PropTypes.func.isRequired
}
const mapStateToProps = (state)=>({
    products : getAllProducts(state.products)  // store 状态包含两部分： products 和 carts
})
const mapDispatchToProps = (dispatch)=>({
   // addToCart :(id)=>{  return dispatch(addProductToCart(id)) }   // 不安全的 方法
    addToCart:addProductToCartSafety(dispatch)
})
export default connect( mapStateToProps, mapDispatchToProps )(ProductContainer) 