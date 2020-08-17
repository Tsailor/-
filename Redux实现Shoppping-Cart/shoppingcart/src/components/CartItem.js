import React from 'react';
import PropTypes from 'prop-types';
import '../styles/App.css';
function CartItem(props){
    let { cardProductdata } = props
    return (
        <div>
            <li className="cart-li">{cardProductdata.title}
            -  $: <span className="product-span">{cardProductdata.price}</span> 
            X <span className="product-span">{cardProductdata.quantity}</span> 
            小计$ ： <span className="product-span">{cardProductdata.unitPrice}</span> 
            </li>
        </div>
    )
}
CartItem.propTypes = PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    unitPrice:PropTypes.number.isRequired
}).isRequired

export default CartItem;