import React from 'react';
import { NavLink } from "react-router-dom";

import HeaderInfoPanel from './HeaderInfoPanel/HeaderInfoPanel'

import './Header.scss';

import HeaderTopNavigation from './HeaderTopNavigation/HeaderTopNavigation'


function Header() {
    return (
        <header className="header">
            <div className="header-top-navigation">
                <div className="container">
                    <HeaderTopNavigation />
                </div>
            </div>
            <div className="header-common">
                <div className="container">
                    <NavLink to="/" className="header__logo">
                        <img src="./images/logo.png" alt="dotbike"/>
                    </NavLink>
                    <div className="header-common__right-side">
                        <HeaderInfoPanel />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
