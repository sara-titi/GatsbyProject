import {createStore} from "redux";
import CartReducer from "../reducers";
const initialState = {
    cart: []      
    
};
// function reducers(state) {
//     return state;
// }
const store = createStore(CartReducer, initialState);
export default store;