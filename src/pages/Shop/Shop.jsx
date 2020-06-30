import React from 'react';
import './Shop.scss';

import ProductList from '../../components/ProductList/ProductList'

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

function Shop() {
    return (
        <section className="section-shop">
            <div className="container">
                <h1>Shop page</h1>
                <ProductList products={bikes}/>
            </div>
        </section>
    );
}

export default Shop;
