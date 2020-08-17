import shop from '../api/shop';   // 用来模拟异步请求
import * as types from '../constants/ActionTypes';   //  actions 类型
import store from '../store/store'

export const getAllProducts = () => dispatch => {
    shop.getProducts(products => {
      dispatch(receiveProducts(products))
    })
  }
     // 等价写法
// import _products from './products.json'
// export const getAllProducts = function(){
//     return (dispatch) =>{
//         // shop.getProducts(  )
//         setTimeout(()=>{
//             dispatch(receiveProducts(_products))
//         },1000)
//     }
// }

const receiveProducts = (products)=>{
    return {
        type : types.RECEIVE_PRODUCTS,
        products
    }
}
export const addProductToCart = (id) =>({   // 不安全的写法
    type : types.ADD_PRODUCT_TO_CART,
    id
})

export const checkProductout = (dispatch) =>(cardProducts)=>{
    shop.buyProducts(cardProducts,()=>{
      dispatch({   
          type: types.CHECKOUT_SUCCESS,
          cardProducts
      })
    })
}



   // addToCart :(id)=>{  return dispatch(addProductToCart(id)) }
   // addToCart:addProductToCartSafety(dispatch)
export const addProductToCartSafety = (dispatch) =>(id)=>{
  if(store.getState().products.byId[id].inventory > 0){    //  在商品库存大于0的时候才dispatch 一个action
     dispatch(addProductToCart(id))
  }
}


