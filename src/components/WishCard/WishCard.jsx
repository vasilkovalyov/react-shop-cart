import React from 'react'
import './WishCard.scss'

import { Link } from 'react-router-dom';

const WishCard = (props) => {
    let {id, image, name, price, currency} = props.product;

    return (
        <div className="wishcard">
            <div className="wishcard__image">
                <input type="checkbox"/>
                <button className="wishcard__btn-remove">x</button>
                <img src={`./images/${image}`} alt={name}/>
            </div>
            <div className="wishcard__body">
                <h5>
                    <Link to={`/product/${id}`} className="wishcard__name">{name}</Link>
                </h5>
                <span className="wishcard__price">{price}{currency}</span>
            </div>
        </div>
    )
}

export default WishCard;