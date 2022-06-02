
import { ADD_TO_CART , CLEAR_CART,DELETE_ITEM } from "./types";

export function addToCart(productInfo, quantity){
  return{
      type: ADD_TO_CART,
      productInfo,
      quantity
  }
}

export function clearCart(){
  return{
      type:  CLEAR_CART
  }
}


export function deleteItem(id){
  return{
      type: DELETE_ITEM,
      id
  }
}

