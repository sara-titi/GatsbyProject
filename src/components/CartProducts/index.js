import React from "react";
import { Link } from "gatsby";
import { Card, CardSubtitle, CardTitle } from "./styledComponent";
import { useSelector, useDispatch } from 'react-redux'
import { removeItem } from "../../stateManagment/cartSlice";

const CartProducts = (props) => {
  const quantity = useSelector((state) => state.cart.quantity);

  const dispatch = useDispatch()
   const {item} = props;
   const {product} = item;
  return (
    //     <Card className="card mb-3">
    //   <div className="card-body">
    //   <div className="d-flex justify-content-between">
    //       <CardTitle className="card-title">{item.title}</CardTitle>
    //       <CardSubtitle className="card-subtitle">{item.id}</CardSubtitle>
    //     </div>
    //     <p className="card-text ">Price: {item.price}</p>
    //     <p className="card-text">Quantity: {quantity} </p>

    //     <p className="card-text">Total Price: {quantity * item.price}</p>
    //     <p className="card-text">
    //       {/* <button type="button" className="btn btn-light" onClick={()=> dispatch(removeItem(item.id))}>Delete</button> */}
    //     </p>

    //   </div> 
    // </Card>
        <Card className="card mb-3">
        <div className="card-body">
         <div className="d-flex justify-content-between">
            <CardTitle className="card-title">{product.title}</CardTitle>
            <CardSubtitle className="card-subtitle">{product.id}</CardSubtitle>
         </div>
             <p className="card-text ">Price: {product.price}</p>
              <p className="card-text">Quantity: {item.quantity }</p>
              <p className="card-text">Total: {item.quantity * product.price}</p>
              {/* <button type="button" className="btn btn-light" onClick={()=> dispatch(removeItem(product.id))}>Delete</button> */}

        </div> 
      </Card>
   
  );
};


export default CartProducts;
