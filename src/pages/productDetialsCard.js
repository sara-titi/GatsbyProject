import React,{useState} from 'react'
import {connect} from "react-redux";
import { addToCart } from "../stateManagment/actions/actions";

 const ProductDetialsCard = (props) =>{
    const product = props.product;
    const [count, setCount] = useState(0); 
   

      const handelQuantity = (event)=>{
        setCount(
            event.target.value
        )
      }
    return(
        <div className="d-flex justify-content-center align-items-center mt-5">
            <div className="card" >
                
                    <img className="card-img-top h-25" src={product.images[0]} alt="Card image cap" />
                    <div className="card-body">
                    <p className="card-text">{product.brand}</p>

                    <p className="card-text">{product.title}</p>

                        <p className="card-text">{product.description}</p>
                        <p className="card-text"  >rating :{product.rating}</p>
                        <p className="card-text"  >stock :{product.stock}</p>
                        
                        <div className="btn-group mb-2" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-light" onClick={() => { 
                            if(count > 0)
                             setCount(count - 1)
                          return}}>-</button> 
                        <button type="button" className="btn btn-light" onChange={handelQuantity}> {count}</button>
                        <button type="button" className="btn btn-light" onClick={() => setCount(count + 1)}>+</button>
                        </div>
                        <p>Total:    <span className="text-danger">{count*product.price} </span> </p>
                        <p className="card-text"  ><button type="button" className="btn btn-light" onClick={()=>props.addToCart(product, count)}>ADD TO CART</button></p>

                    </div>
                    </div>
            </div>         
    )
}
const mapDispatchToProps = (dispatch) => {
  return {
      // clearCart: () => dispatch(clearCart()),
      addToCart: (productInfo, quantity) => dispatch(addToCart(productInfo, quantity)),
  };
}

export default connect(null, mapDispatchToProps)(ProductDetialsCard);
