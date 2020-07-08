import React, { useState } from 'react'
import './Product.scss'
import { Link } from 'react-router-dom';

import RatingStar from '../RatingStar/RatingStar'
import NotificationProduct from '../NotificationProduct/NotificationProduct';

import { connect } from 'react-redux';

import { addProductToCart } from '../../redux/actions/cart/index'
import { addProductToWishlist  } from '../../redux/actions/wishlist/index'

function Product(props) {
    const speedNotification = 1000;
    const msgAddToCart = "Product add to cart";
    const msgAddToWishlist = "Product add to wishlist";

    let {id, image, price, currency, name, raiting, discount, inCart, inWishlist} = props.product;

    let [isNotification, showNotification] = useState(false);
    let [messageNotification, setMessageNotification] = useState(null);

    let isDiscount = () => discount.isActive ? true : false;

    let getDiscount = (number) => (
        <div className="product__discount">
            <span className="product__discount-text">OFF</span>
            <span className="product__discount-percent">{number}</span>
        </div>
    )

    let determinePrice = (isPrice, newPrice, oldPrice) => {
        if(!isPrice) {
            return (
                <strong className="product__price">{newPrice}{currency}</strong>
            )
        } else {
            return (
                <strong className="product__price"><del className="product__price-old">{oldPrice}{currency}</del> {price}{currency}</strong>
            )  
        }
    }

    function notificationAction(message) {
        setMessageNotification(messageNotification = message);
        showNotification(isNotification = true);

        setTimeout(() => {
            showNotification(isNotification = false);
        }, speedNotification);
    }
    
    return (
        <div className="product">
            { isDiscount() ? getDiscount(discount.percent) : null }
            <div className="product__image">
                <img src={`./images/${image}`} alt={name}/>
            </div>
            <div className="product__body">
                <h4>
                    <Link to={`/product/${id}`} className="product__name">{name}</Link>
                </h4>
                <RatingStar raiting={raiting} raitingClass="product__list-rating"/>
                <div className="product__price-holder">
                    {
                        determinePrice(isDiscount(), price, discount.oldPrice)
                    }
                </div>
                <NotificationProduct 
                    cls="product__"
                    message={ messageNotification } 
                    isActive={ isNotification }
                    />
            </div>
            <div className="product__hidden-content">
                <div className="product__btn-wrap">
                    <button className="product__btn" title="Add to Cart" onClick={() => {
                            props.addProductToCart(props.product);
                            notificationAction(msgAddToCart);
                        }}>add to cart</button>
                    <button 
                        className={`product__btn ${inWishlist ? 'active' : null}`}
                        title="Add to Wishlist" 
                        onClick={() => {
                            props.addProductToWishlist(props.product);
                            notificationAction(msgAddToWishlist);
                        }}>
                        <span className="icon-chart-bar"></span>
                    </button>
                </div>
            </div>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        prop: state.prop
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addProductToCart: (product) => {
            dispatch(addProductToCart(product));
        },
        addProductToWishlist: (product) => {
            dispatch(addProductToWishlist(product))
        }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Product);