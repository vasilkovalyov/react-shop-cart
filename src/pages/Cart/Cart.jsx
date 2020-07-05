import React from 'react';
import './Cart.scss';

import BreadcrumbsPage from '../../components/BreadcrumbsPage/BreadcrumbsPage'
import CartList from '../../components/Cart/CartList/CartList'
import CartTotal from '../../components/Cart/CartTotal/CartTotal'
import { connect } from 'react-redux';

function Cart({productCart = []}) {

    return (
        <section className="section-cart">
            <BreadcrumbsPage caption="Cart" />
            <div className="section-cart__inner">
                <div className="container">
                    <CartList products={productCart}/>
                    <div className="section-cart__bottom">
                        { productCart.length > 0 ? <CartTotal /> : null}
                    </div>
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
