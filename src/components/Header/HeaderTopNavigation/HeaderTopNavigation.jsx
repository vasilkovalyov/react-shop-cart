import React from 'react';
import './HeaderTopNavigation.scss';

import { NavLink } from 'react-router-dom';


function HeaderTopNavigation(props) {
    const navigation = [
        {
            name: 'With List',
            path: '/wishlist',
        },
        {
            name: 'Shopping Cart',
            path: '/cart',
        }
    ]

    return (
        <nav className="header-navigation">
            <ul className="header-navigation__list">
                {
                    navigation.map((navItem, key) => {
                        return (
                            <li className="header-navigation__item" key={key}>
                                <NavLink to={navItem.path} className="header-navigation__link">{ navItem.name }</NavLink>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    );
}

export default HeaderTopNavigation;
