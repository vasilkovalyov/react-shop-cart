import React from 'react';
import './Wishlist.scss';

import BreadcrumbsPage from '../../components/BreadcrumbsPage/BreadcrumbsPage'
import WishList from '../../components/WishList/WishList'
import { connect } from 'react-redux';

function Wishlist(props) {
    return (
        <section className="section-wishlist">
            <BreadcrumbsPage caption="Wishlist" />
            <div className="section-wishlist__inner">
                <div className="container">
                    <WishList products={props.productsWishList} />
                </div>
            </div>
        </section>
    );
}

const mapStateToProps = (state) => {
    return {
        productsWishList: state.wishlist.wishlist
    }
}

export default connect(mapStateToProps)(Wishlist);
