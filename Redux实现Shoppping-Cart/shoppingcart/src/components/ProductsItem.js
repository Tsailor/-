import React from 'react';
import PropTypes from 'prop-types';

function ProductsItem(props){
    let { data, onaddToCartClick } = props;
    return(
        <div className="product-box">
            <li>{data.title}
            -  $: <span className="product-span">{data.price}</span>  { data.inventory > 0 ?  <span className="product-span">x {data.inventory}</span> : ""}</li>
            
            <button onClick = {()=>onaddToCartClick(data.id)}
                    disabled = {data.inventory > 0 ? "" : "disabled"}
            > {data.inventory > 0 ? "Add To Cart" : "Sold Out" }</button>
             
        </div>
        
    )
}

ProductsItem.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title : PropTypes.string.isRequired,
        price : PropTypes.number.isRequired,
        inventory : PropTypes.number.isRequired
    }).isRequired
}
export default React.memo(ProductsItem ); // 使用React.memo 包裹避免不必要的渲染