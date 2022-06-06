import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cart: [],
  quantity: 0,
  cartTotalQuantity:0
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
      addToCart:function addToCart(state, action) {
        //   console.log(action);
        // //   const tempProduct = {...state.payload}
        //   state.cart.push(action.payload.product);
        //   state.cartTotalQuantity += action.payload.quantity;
        //   state.quantity = action.payload.quantity;
        //   console.log("state.quantity",state.quantity);
        //   console.log("state.cartTotalQuantity",state.cartTotalQuantity);
        
            return {
              cart:[
                  ...state.cart,
                  {
                    product: action.payload.product,
                    quantity:  action.payload.quantity,
                  }
              ]
            
          }

      },clearCart:function clearCart(state) {
            state.cart = [];
            state.quantity = 0;
            state.cartTotalQuantity = 0
            
        }
  }
})

// Action creators are generated for each case reducer function
export const {addToCart, clearCart, removeItem } = cartSlice.actions;
export default cartSlice.reducer
