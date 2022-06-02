import React from 'react'
import { ADD_TO_CART , CLEAR_CART ,DELETE_ITEM} from "../actions/types";

export default function CartReducer(state, action) {
 switch (action.type) {
     case ADD_TO_CART:{
         return {
            cart:[
                ...state.cart,
                {
                   product: action.productInfo,
                   quantity:  action.quantity
                }
            ]
         }
     }

     case CLEAR_CART:{
            const updateState = {...state};
            updateState.cart = [];
            return updateState;
        
    }

    case DELETE_ITEM:{
        // return {
        //     cart:[
        //         ...state.cart,
        //         {
        //            product:state.cart.filter((item) => {return item.id !== action.id})

        //         }
        //     ]
        //  }
    //     // return state
      const cartItems =  state.cart.filter(item => item.id !== action.id)
      state.cart = cartItems
        
    
}
     default:
         return state;
 }
}
