import React from 'react';
import { NavLink } from "react-router-dom";

import './Header.scss';

import HeaderNavigation from './HeaderNavigation'

function Header() {
    const navLinks = [
        {
            path: '/shop',
            name: 'shop'
        },
        {
            path: '/cart',
            name: 'cart'
        },
    ]

    return (
        <header className="header">
            <div className="container">
                <NavLink to="/" className="header__logo">Shop Cart</NavLink>
                <HeaderNavigation navLinks={navLinks}>
                    <div className="shop-cart">
                        <div className="shop-cart__icon">
                            <img src="./cart.svg" alt="cart"/>
                        </div>
                        <span className="shop-cart__counter">0</span>
                    </div>
                </HeaderNavigation>
            </div>
        </header>
    );
}

export default Header;
