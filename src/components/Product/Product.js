
import React from 'react'
import './Product.scss'

function Product(props) {
    const product = props.product;
    console.log(props);
    return (
        <div className="product">
            <div className="product__image">
                <img src={`/images/${product.image}`} alt={product.name}/>
            </div>
            <h2>{product.name}</h2>
            <p>{product.price} ₴</p>
        </div>
    )
}

export default Product;