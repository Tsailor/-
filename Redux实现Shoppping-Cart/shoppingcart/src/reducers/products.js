import { combineReducers } from 'redux';
import { RECEIVE_PRODUCTS } from '../constants/ActionTypes'
// 商品的状态通过 key - value 形式保存  byId { product.id - product } 
// const byId = (state={}, action)=>{
//     switch (action.type){
//         case RECEIVE_PRODUCTS : return {
//             ...state,
//             ...action.products.reducer((obj,product)=>{   // {}上 累加 key - value (product.id -- product) 再展开
//                 obj[product.id] = product;
//                 return obj;
//             },{})
//         }
//         default : return state
//     }
// }
const byId = (state = {}, action) => {
    switch (action.type) {
      case RECEIVE_PRODUCTS:
        return {
          ...state,
          ...action.products.reduce((obj, product) => {
            obj[product.id] = product
            return obj
          }, {}) 
        }
      default: return state
    }
  }
const containId = (state=[], action )=>{
    switch(action.type){
        case RECEIVE_PRODUCTS : return action.products.map((v) => v.id);  // [id1, id2, id3]
        default : return state
    }
}
export const getProducts = (state,id) =>{   // 根据单个 id 取出 product
    return state.byId[id]
}
export const getAllProducts = (state)=>{     //  拿到所有products, 返回数组
   return state.containId.map((id)=> getProducts(state,id))
}
export default combineReducers({    //  组合state
    byId,
    containId
})