import React from 'react'
import './Product.scss'

import { NavLink } from 'react-router-dom';

import RatingStar from '../RatingStar/RatingStar'

function Product(props) {
    let {id, image, price, currency, name, raiting} = props.product;
    
    return (
        <div className="product">
            <div className="product__image">
                <img src={`./images/${image}`} alt={name}/>
            </div>
            <div className="product__body">
                <NavLink to={`/product/${id}`} className="product__name">{name}</NavLink>
                <RatingStar raiting={raiting} raitingClass="product__list-rating"/>
                <div className="product__price-holder">
                    <strong className="product__price">{price}{currency}</strong>
                </div>
            </div>
        </div>
    )
}

export default Product;