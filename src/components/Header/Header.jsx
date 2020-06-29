import React from 'react';
import { NavLink } from "react-router-dom";

import HeaderNavList from './HeaderNavList'
import HeaderAdditionalList from './HeaderAdditionalList'

import './Header.scss';


function Header() {
    return (
        <header className="header">
            <div className="container">
                <NavLink to="/" className="header__logo">
                    <img src="./images/mountain-bike.png" alt=""/>
                </NavLink>
                <nav className="header-navigation">
                    <HeaderNavList/>
                    <HeaderAdditionalList />
                </nav>
            </div>
        </header>
    );
}

export default Header;
