import React from 'react';
import './ProductCart.scss';

import RatingStar from '../RatingStar/RatingStar'
import { Link } from 'react-router-dom';

import QuantityCounter from '../QuantityCounter/QuantityCounter'

function CartProduct(props) {
    let {id, image, price, currency, name, raiting, discount} = props.product;

    return (
        <tr className="product-cart">
            <td className="product-cart__image-cell">
                <div className="product-cart__image">
                    <img src={`../images/${image}`} alt={name}/>
                </div>
            </td>
            <td className="product-cart__name-cell">
                <Link to={`/product/${id}`} href="#" className="product-cart__name">{name}</Link>
                <RatingStar raiting={raiting} raitingClass="product__list-rating"/>
            </td>
            <td className="product-cart__quantity-cell">
                <QuantityCounter />
            </td>
            <td className="product-cart__price-cell">
                <span className="product-cart__price">{price}{currency}</span>
            </td>
            <td className="product-cart__total-price-cell">
                <span className="product-cart__total-price">{price}{currency}</span>
            </td>
            <td className="product-cart__remove-cell">
                <button className="product-cart__remove">x</button>
            </td>
        </tr>
    )
}

export default CartProduct;