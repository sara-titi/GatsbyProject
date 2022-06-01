import React, { useEffect, useState, useCallback } from "react";
import Layout from "@components/Layout";
import { getProducts } from "../services/getProduct";
import CartProducts from "@components/CartProducts";
import {connect} from "react-redux";

function Cart(props) {
  return (

    <Layout>
           <h3 className="m-3">Cart</h3>
            <div className="ms-4">
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
            </div>
            <h3 className="m-3">Total: {props.total}</h3>

  </Layout>
  
  )
}
const mapStateToProps = (state) => {
  return {
      cartItems: state.cart,
      total: state.cart.reduce((total, item) => total + item.quantity * item.product.price, 0),
  };
}


export default connect(mapStateToProps)(Cart);
