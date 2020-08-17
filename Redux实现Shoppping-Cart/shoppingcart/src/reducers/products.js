/*         state(即：products) :{
               byId : { key : {product}  },
                containId : [id1,id2...]
           }
*/
import { combineReducers } from 'redux';
import { RECEIVE_PRODUCTS, ADD_PRODUCT_TO_CART } from '../constants/ActionTypes'
// 商品的状态通过 key - value 形式保存  byId { product.id - product } 

const product = (state={},action) => {   // state = { product }
           switch(action.type){
              case ADD_PRODUCT_TO_CART : return {
                 ...state,
                 inventory : state.inventory-1
              }
              default : return state
           }
}
const byId = (state = {}, action) => {
    switch (action.type) {
      case RECEIVE_PRODUCTS :
        return {
          ...state,
          ...action.products.reduce((obj, product) => {
            obj[product.id] = product
            return obj
          }, {}) 
        };
      case ADD_PRODUCT_TO_CART : 
        let id = action.id; 
          return {
            ...state,
            [id] : product(state[id], action)  // 继续拆分state  key为数字的话，[key] 才可以设置属性为数字。
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