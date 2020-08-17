import React from 'react';
import CartItem from './CartItem'
function Cart(props){
    let { cardProducts } = props;
    return(
        <div>{cardProducts.map((cardProduct) =><CartItem key ={cardProduct.id} cardProductdata={cardProduct}/>)}</div>
    ) 
}
export default Cart;