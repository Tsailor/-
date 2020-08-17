import products from './products';
import cart from './cart';
import { combineReducers } from 'redux';

const getProductItemsById = (state, id) =>{  // product ,id
    return {
        id : id,
        title : state[id].title,
        price : state[id].price,
    }
}
const getquantityById = (state,id)=>{  // (quantityId, id )
    return state[id];
}
const getAddedGoodId = (state) => state.cart.addedGoodId ; // return [ 购物车中商品id ]    
const getQuantitydataId = (state) => (state.cart.quantityById);   //  return { id : quantity }
const getProducts = (state) => (state.products.byId);     //  return  { id : {product.id product.title} }

export const getCartProducts = (state) => {  // return [{id :"", title:"",price:"",quantity:""},{}]
    let productsdata  = getProducts(state);
    let addedGoodIddata = getAddedGoodId(state);
    let quantitydata = getQuantitydataId(state);

    return addedGoodIddata.map((id)=>({
        ...getProductItemsById( productsdata, id ),
        quantity : getquantityById(quantitydata, id), // 数量
        unitPrice : getquantityById(quantitydata, id) * getProductItemsById( productsdata, id ).price  // 单价 ： 数量 X 价格
    }))
}
export const getProductsTotal = (state) => {
    let productsdata  = getProducts(state);
    let addedGoodIddata = getAddedGoodId(state); //  购物车中商品id数组
    let quantitydata = getQuantitydataId(state);    //  所有商品对象，id - 数量
    return addedGoodIddata.reduce((unitPrice1,id)=>{
        return unitPrice1 + getquantityById(quantitydata, id) * getProductItemsById( productsdata, id ).price  // 单价 ： 数量 X 价格
    },0).toFixed(2)
}
export default combineReducers({
    products,
    cart
})