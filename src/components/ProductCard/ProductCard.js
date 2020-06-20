import React from 'react';
import './ProductCard.scss';
import { Link } from "react-router-dom";


function Product(props) {
    const product = props.product;
    
    return (
       <div className="product-card">
           <div className="product-card__image">
               <img src={`images/${product.image}`} alt={product.name}/>
           </div>
           <div className="product-card__body">
                <span className="product-card__name">{product.name}</span>
                <span className="product-card__price">{product.price} ₴</span>
                <div className="product-card__btn-wrap">
                    <button className="product-card__btn product-card__btn-green">Add to cart</button>
                    <Link to={`/product/${product.id}`} className="product-card__btn">View product</Link>
                </div>
           </div>
       </div>
    )
}

export default Product;
