import React from 'react'
import './QuantityCounter.scss'

function QuantityCounter() {
    return (
        <div className="quantity-counter">
            <button className="quantity-counter__btn">-</button>
            <input type="text" className="quantity-counter__input" />
            <button className="quantity-counter__btn">+</button>
        </div>
    )
}

export default QuantityCounter;