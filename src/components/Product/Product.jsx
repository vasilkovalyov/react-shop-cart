import React from 'react'
import './Product.scss'

import { NavLink } from 'react-router-dom';

import RatingStar from '../RatingStar/RatingStar'
import { connect } from 'react-redux';

import { addProductToCart } from '../../redux/actions/cart/index'

function Product(props) {
    let {id, image, price, currency, name, raiting, discount} = props.product;

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
                    <NavLink to={`/product/${id}`} className="product__name">{name}</NavLink>
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
                    <a href="#" className="product__btn" title="Add to Cart" onClick={() => props.addProductToCart(props.product)}>add to cart</a>
                    <a href="#" className="product__btn" title="Add to Wishlist">
                        <span className="icon-chart-bar"></span>
                    </a>
                    <a href="#" className="product__btn" title="Add to Compare">
                        <span className="icon-checkbox-checked"></span>
                    </a>
                </div>
            </div>
        </div>
    )
}


const mapStateToProps = (state, ownProps) => {
    return {
        prop: state.prop
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addProductToCart: (product) => {
            dispatch(addProductToCart(product));
        }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Product);