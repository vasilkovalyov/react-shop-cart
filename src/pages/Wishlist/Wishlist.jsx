import React from 'react';
import './Wishlist.scss';

import BreadcrumbsPage from '../../components/BreadcrumbsPage/BreadcrumbsPage'

function Wishlist() {
    return (
        <section className="section-wishlist">
            <BreadcrumbsPage caption="Wishlist" />
            <div className="section-wishlist__inner">
                <div className="container">
                    
                </div>
            </div>
        </section>
    );
}

export default Wishlist;
