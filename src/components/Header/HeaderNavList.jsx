import React from 'react';
import { NavLink } from 'react-router-dom';

function HeaderNavList() {
    const navLinks = [
        {
            path: '/shop',
            name: 'shop'
        },
        {
            path: '/cart',
            name: 'cart'
        }
    ]

    const navigationList = navLinks.map((navItem, key) => {
        return (
            <li className="header-navigation__item" key={key}>
                <NavLink to={navItem.path} className="header-navigation__link">{navItem.name}</NavLink>
            </li>
        )
    })

    return (
        <ul className="header-navigation__list">
            {navigationList}
        </ul>
    )
}

export default HeaderNavList;