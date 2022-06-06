// import {createStore} from "redux";
// import CartReducer from "../reducers";
// const initialState = {
//     cart: []      
    
// };
// // function reducers(state) {
// //     return state;
// // }
// const store = createStore(CartReducer, initialState);
// export default store;




import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../counterSlice' //counterSlice
  import cartReducer  from '../cartSlice' //cartSlice


const store = configureStore({
  reducer: {
    counter: counterReducer,
      cart: cartReducer
  },
})

export default store;


