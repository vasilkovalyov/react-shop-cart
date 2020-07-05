
import React from 'react'
import './CartTotal.scss'
import { connect } from 'react-redux'

import { calcTotalPriceCart } from '../../Custom/index'

function CartTotal(props) {

    const cartTotalList = () => {
        return (
            <ul className="cart-total-list">
                {
                    props.cart.cart.map((product, key) => 
                        (
                            <li className="cart-total-list__item" key={key}>
                                <span>{product.name}</span>
                                <span>{product.count} x {product.price}{product.currency}</span>
                                <span className="cart-total-list__item-result"> = {parseInt(product.count * parseFloat(product.price))}$</span>
                            </li>
                        )
                    )
                }
            </ul>
        )
    }

    return (
        <div className="cart-total">
            <div className="cart-total__head">
                <span className="cart-total__title">cart total</span>
            </div>
            <div className="cart-total__body">
                { cartTotalList() }
                <div className="cart-total__price">
                    <span>total</span>
                    <span>{calcTotalPriceCart(props.cart.cart, 'count', 'price')}$</span>
                </div>
            </div>
            <div className="cart-total__bottom">
                <div className="cart-total__btn-wrap">
                    <a href="#" className="cart-total__btn">Proceed to Checkout</a>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps, null)(CartTotal)