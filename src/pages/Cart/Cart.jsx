import React from 'react';
import './Cart.scss';

import BreadcrumbsPage from '../../components/BreadcrumbsPage/BreadcrumbsPage'
import CartList from '../../components/CartList/CartList'
import { connect } from 'react-redux';

function Cart(props) {

    return (
        <section className="section-cart">
            <BreadcrumbsPage caption="Cart" />
            <div className="section-cart__inner">
                <div className="container">
                    <CartList products={props.productCart}/>
                </div>
            </div>
        </section>
    );
}



const mapStateToProps = (state) => {
    return {
        productCart: state.cart.cart
    }
}

export default connect(mapStateToProps, null)(Cart);
