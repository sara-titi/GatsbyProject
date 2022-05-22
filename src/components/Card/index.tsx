import React from 'react'
import {Card ,CardSubtitle ,CardTitle} from './styledComponent';

type Props = {
    id: number;
  title: string;
  description:string;
  price:number;
  discountPercentage:number;
  }
 const Product: React.FC<Props> = ({id, title, description,price, discountPercentage}) =>{
    //const { id, title, description ,price ,discountPercentage} = props;
  
  return (
    <Card className="card">
        <div className="card-body">
                <CardTitle className="card-title">{id}</CardTitle>
                <CardSubtitle className="card-subtitle">{title}</CardSubtitle>
                <p className="card-text">{description}</p>
                <a href="#" className="card-link">{price}</a>
                <a href="#" className="card-link">{discountPercentage}</a>
            </div>
        
        </Card>
  )
}

export default Product