import React from 'react'
import './Product.scss'

import { Link } from 'react-router-dom';

import RatingStar from '../RatingStar/RatingStar'
import { connect } from 'react-redux';

import { addProductToCart } from '../../redux/actions/cart/index'
import { addProductToWishlist  } from '../../redux/actions/wishlist/index'

function Product(props) {
    let {id, image, price, currency, name, raiting, discount, inCart} = props.product;

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
            </div>
            <div className="product__hidden-content">
                <div className="product__btn-wrap">
                    <button className="product__btn" title="Add to Cart" onClick={() => props.addProductToCart(props.product)}>add to cart</button>
                    <button className="product__btn" title="Add to Wishlist" onClick={() => props.addProductToWishlist(props.product)}>
                        <span className="icon-chart-bar"></span>
                    </button>
                    <button className="product__btn" title="Add to Compare">
                        <span className="icon-checkbox-checked"></span>
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