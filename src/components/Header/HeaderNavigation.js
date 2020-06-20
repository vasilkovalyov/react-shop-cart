import React from 'react';
import { NavLink } from "react-router-dom";

import './Header.scss';

function HeaderNavigation(props) {
    const navLinks = props.navLinks;

    const navigation = navLinks.map((item, i) => {
        return (
            <li className="navigation__item" key={i}>
                <NavLink  to={item.path} className="navigation__link">{item.name}</NavLink>
            </li>
        )
    })

    return (
        <nav className="header__navigation">
            <ul className="navigation">
                {navigation}
            </ul>
        </nav>
    );
}

export default HeaderNavigation;
