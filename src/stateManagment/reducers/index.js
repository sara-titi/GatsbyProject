import React from 'react'
import { ADD_TO_CART} from "../actions/types";

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

     default:
         return state;
 }
}
