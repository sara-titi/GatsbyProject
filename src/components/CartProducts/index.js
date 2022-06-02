import React from "react";
import { Link } from "gatsby";
import { Card, CardSubtitle, CardTitle } from "./styledComponent";
import {connect} from "react-redux";
import { deleteItem } from "../../stateManagment/actions/actions";


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
            {/* <p className="card-text"  ><button type="button" className="btn btn-light" onClick={()=>props.deleteItem(product.id)}>delete</button></p> */}

      </div> 
    </Card>
   
  );
};


// export default CartProducts;
const mapDispatchToProps = (dispatch) => {
  return {
    deleteItem: (id) => dispatch(deleteItem(id)),
  };
}

export default connect(null, mapDispatchToProps)(CartProducts);
