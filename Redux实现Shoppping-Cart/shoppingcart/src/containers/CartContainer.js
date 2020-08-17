import React from 'react';
import Cart from '../components/Cart';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../styles/App.css';
import { getCartProducts, getProductsTotal } from '../reducers/reducers';
import { checkProductout } from '../actions/index'
function CartContainer(props){
    let { cardProducts, total, checkout} = props;
    return (
        <div>
            <h3>please checkout your cart in as soon as possible</h3>
            <h4>Your Cart :</h4>
            <Cart cardProducts={cardProducts} />
            <div>
                <span>总合计金额：$</span>{total}
                <button disabled={ total >0 ? "" : "disabled"}
                        className="check-btn"
                        onClick = {()=>checkout(cardProducts)}
                 > { total > 0 ?"Check Out" : "Nothing To Check Out"}</button>
            </div>
        </div>
    )
}
CartContainer.propTypes = {
    cardProducts : PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired,
        unitPrice:PropTypes.number.isRequired
    })).isRequired,
    total : PropTypes.string.isRequired
}
const mapStateToProps = (state ) =>({
    cardProducts : getCartProducts(state),   //  cart中商品
    total : getProductsTotal(state)          //   总结算金额 
})
const mapDispatchToProps = (dispatch) =>({
    checkout : checkProductout(dispatch)
})
export default connect( mapStateToProps, mapDispatchToProps )(CartContainer);