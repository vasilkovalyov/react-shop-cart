import React from 'react';
import './Cart.scss';

import BreadcrumbsPage from '../../components/BreadcrumbsPage/BreadcrumbsPage'
import CartList from '../../components/CartList/CartList'



const bikes = [
    {
        id: 1,
        image: 'bike-1.jpg',
        price: '1700.00',
        currency: '$',
        name: 'BMW Cruise Bike Mineral White',
        raiting: '4',
        discount: {
            isActive: true,
            oldPrice: '1899.00',
            percent: '10%'
        },
    },
    {
        id: 2,
        image: 'bike-2.jpg',
        price: '420.00',
        currency: '$',
        name: 'Comanche TOMAHAWK 29 blacke',
        raiting: '3',
        discount: {
            isActive: false,
        },
    },
    {
        id: 3,
        image: 'bike-3.jpg',
        price: '3840.00',
        currency: '$',
        name: 'Cannondale TOPSTONE Carbon Lefty',
        raiting: '5',
        discount: {
            isActive: false,
        },
    },
]

function Cart() {
    return (
        <section className="section-cart">
            <BreadcrumbsPage caption="Cart" />
            <div className="section-cart__inner">
                <div className="container">
                    <CartList products={bikes}/>
                </div>
            </div>
        </section>
    );
}

export default Cart;
