import React from "react";
import { Card, CardSubtitle, CardTitle } from "./styledComponent";
import { Link } from "gatsby";
// import DescriptionComp from "../pages/DescriptionComp.js";

type Props = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  image:string
};
const Product: React.FC<Props> = ({
  id,
  title,
  description,
  price,
  discountPercentage,
  image
}) => {

  return (<>

    <Card className="card mb-3">
    <div className="row no-gutters">
      <div className="col-md-4">
        <img src={image} className="card-img" alt="..." />
      </div>
      <div className="col-md-8">
        <div className="card-body">
        <div className="d-flex justify-content-between">
          <CardTitle className="card-title">{title}</CardTitle>
          <CardSubtitle className="card-subtitle">{id}</CardSubtitle>
        </div>
        {/* <p className="card-text ">{description}</p> */}
        <p className="card-text ">Price: {price}</p>
        <p className="card-text">Discount Percentage: {discountPercentage}</p>
        {/* <div className="btn-group mb-2" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-light">-</button>
          <button type="button" className="btn btn-light">1</button>
          <button type="button" className="btn btn-light">+</button>
        </div>
        <p className="card-text"  >     <button type="button" class="btn btn-light">ADD TO CART</button></p> */}

        <p className="card-text"  > <Link to={`/productDetials/${id}`} >VIEW MORE</Link></p>
        </div>
      </div>
    </div>
  </Card>
    </>
  );
};

export default Product;
