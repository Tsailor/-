import shop from '../api/shop';   // 用来模拟异步请求
import * as types from '../constants/ActionTypes';   //  actions 类型

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