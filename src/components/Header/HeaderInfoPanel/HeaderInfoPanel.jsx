import React from 'react'
import './HeaderInfoPanel.scss'
import { connect } from 'react-redux';



function HeaderInfoPanel(props) {
    return (
        <div className="header-info-panel">
            <div className="info-circle">
                <span className="info-circle__icon-holder">
                    <span className="icon-heart"></span>
                    { parseInt(props.wishlistLength) !== 0 
                        ? <span className="info-circle__counter">{props.wishlistLength}</span> 
                        : null
                    }
                </span>
            </div>
            <div className="info-circle">
                <span className="info-circle__icon-holder">
                    <span className="icon-shopping"></span>
                    { props.productLength > 0 
                        ? <span className="info-circle__counter">{props.productLength}</span> 
                        : null 
                    }
                </span>
                <span className="price">{parseInt(props.totalPrice) !== 0 ? `$${props.totalPrice}` : null}</span>
            </div>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        productLength: state.cart.cartLength,
        wishlistLength: state.wishlist.wishlistLength,
        totalPrice: state.cart.totalPrice
    }
}

export default connect(mapStateToProps, null)(HeaderInfoPanel);