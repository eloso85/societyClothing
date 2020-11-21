import React from 'react';
import { Link } from 'react-router-dom';
//import Rating from './Rating';
//import image from '../images/bb.jpg'
export default function Product(props) {
  const { product } = props;
  return (
    <div key={product._id} className="card">
      
        <img className="medium" src={product.image} alt={product.name} />
      
      <div className="card-body">
        
          <h2>{product.name}</h2>
       
        
        <div className="row">
          <div className="price">${product.price}</div>
          <div>
           
          </div>
        </div>
      </div>
    </div>
  );
}