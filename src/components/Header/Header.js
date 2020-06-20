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
                <HeaderNavigation navLinks={navLinks}/>
            </div>
        </header>
    );
}

export default Header;
