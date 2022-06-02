import React, { useEffect, useState, useCallback } from "react";
import Layout from "@components/Layout";
import { getProducts } from "../services/getProduct";
import CartProducts from "@components/CartProducts";
import {connect} from "react-redux";
import { clearCart } from "../stateManagment/actions/actions";

function Cart(props) {
  return (

    <Layout>
            <div className="m-4">
            <h3>Cart</h3>

            <br />
            <div>
              {
                props.cartItems.map((item) => {
                  return (
                    <CartProducts item={item}  key={item.id}/>
                  );
                })
              }
            </div>
       
            {/* <button onClick={()=> clearCart()}>clear cart</button> */}
            <h3 className="m-3">Total: {props.total}</h3>
            <p className="card-text"  ><button type="button" className="btn btn-danger" onClick={()=> props.clearCart()}>DELETE CART</button></p>
            </div>

  </Layout>
  
  )
}
const mapStateToProps = (state) => {
  return {
      cartItems: state.cart,
      total: state.cart.reduce((total, item) => total + item.quantity * item.product.price, 0),
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
       clearCart: () => dispatch(clearCart()),
  };
}

export default connect(mapStateToProps ,mapDispatchToProps)(Cart);
