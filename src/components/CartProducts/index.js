import React from "react";
import { Link } from "gatsby";
import { Card, CardSubtitle, CardTitle } from "./styledComponent";


const CartProducts = (props) => {
  const {item} = props;
  const {product} = item;
  return (
        <Card className="card mb-3">
      <div className="card-body">
      <CardTitle className="card-title">{product.title}</CardTitle>
        <p className="card-text ">Price: {product.price}</p>
            <p className="card-text">Quantity: {item.quantity }</p>
            <p className="card-text">Total: {item.quantity * product.price}</p>
      </div> 
    </Card>
   
  );
};


export default CartProducts;
