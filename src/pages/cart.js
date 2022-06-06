import React, { useEffect, useState, useCallback } from "react";
import Layout from "@components/Layout";
import { getProducts } from "../services/getProduct";
import CartProducts from "@components/CartProducts";
import { useSelector, useDispatch } from 'react-redux'
import { clearCart } from "../stateManagment/cartSlice";

function Cart(props) {
    const items = useSelector((state) => state.cart.cart) //read cart items
    const dispatch = useDispatch();

  return (

    <Layout>
           <h3 className="m-3">Cart</h3>
            <div className="ms-4">
            <br />
            <div>
              {items.map((item) => {
                  return (
                    <CartProducts item={item}  key={item.id}/>
                  );
                })
              }
            </div>

            <p className="card-text"  ><button type="button" className="btn btn-danger"
             onClick={()=> dispatch(clearCart())}
             >DELETE CART</button></p>
            </div>
            {/* <h3 className="m-3">Total: {props.total}</h3> */}
  </Layout>
  )
}
// const mapStateToProps = (state) => {
//   return {
//       cart: state.cart,
//       total: state.cart.reduce((total, item) => total + item.quantity * item.product.price, 0),
//   };
// }


// export default connect(mapStateToProps)(Cart);
export default Cart