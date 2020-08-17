import { ADD_PRODUCT_TO_CART, CHECKOUT_FAILURE, CHECKOUT_SUCCESS  } from '../constants/ActionTypes';

/*
     state(即：cart) : {
         addedGoodId:[id1, id2...] // 加入到购物车里的商品的Id
         quantityById:{
             [id] : 数量
         }
     }
*/
const initialState  = {
    addedGoodId : [],
    quantityById : {}
}
const cart = (state = initialState, action)=>{
    switch(action.type){
        case ADD_PRODUCT_TO_CART : 
        let id = action.id;
            return {
                addedGoodId : state.addedGoodId.indexOf(id) === -1 ? [...state.addedGoodId, id] : state.addedGoodId,
                quantityById : { ...state.quantityById,  [id] : (state.quantityById[id]||0)+1 }
            } ;
        case CHECKOUT_FAILURE : return action.cart; // 结算失败，原数据返回
        case CHECKOUT_SUCCESS : return initialState;   // 结算成功，返回空
        default : return state;
    }
}
export default cart;