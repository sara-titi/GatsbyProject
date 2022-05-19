import React from 'react'

export default function Product(props) {
  const { id, title, description ,price ,discountPercentage} = props;

  return (
    <div className="card" >
        <div className="card-body">
                <h5 className="card-title">{id}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{title}</h6>
                <p className="card-text">{description}</p>
                <a href="#" className="card-link">{price}</a>
                <a href="#" className="card-link">{discountPercentage}</a>
            </div>
        
        </div>
  )
}
