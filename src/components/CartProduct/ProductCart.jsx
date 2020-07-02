import React, {useState} from 'react';
import './ProductCart.scss';

import RatingStar from '../RatingStar/RatingStar'
import { Link } from 'react-router-dom';

import QuantityCounter from '../QuantityCounter/QuantityCounter'
import { connect } from 'react-redux';

import { 
    removeProductFromCart,
    increaseProductCount,
    decreaseProductCount
} from '../../redux/actions/cart/index'

import { existInArrayById } from '../../Custom/index'


function CartProduct(props) {
    let {id, image, price, currency, name, raiting, discount, count} = props.product;
    

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
                <QuantityCounter 
                    count={count}
                    handlerBtnDecrease = {() => props.increaseProductCount(props.product) }
                    handlerBtnIncrease = {() => props.decreaseProductCount(props.product) }
                />
            </td>
            <td className="product-cart__price-cell">
                <span className="product-cart__price">{price}{currency}</span>
            </td>
            <td className="product-cart__total-price-cell">
                <span className="product-cart__total-price">{price}{currency}</span>
            </td>
            <td className="product-cart__remove-cell">
                <button className="product-cart__remove" onClick={() => props.removeProductFromCart(id)}>x</button>
            </td>
        </tr>
    )
}



const mapDispatchToProps = (dispatch) => {
    return {
        removeProductFromCart: (idProduct) => {
            dispatch(removeProductFromCart(idProduct));
        },
        
        increaseProductCount: (product) => {
            dispatch(increaseProductCount(product));
        },

        decreaseProductCount: (product) => {
            dispatch(decreaseProductCount(product));
        }
    }
}

export default connect(null, mapDispatchToProps)(CartProduct);