import React from 'react'
import './QuantityCounter.scss'

function QuantityCounter(props) {
    let {count} = props;

    return (
        <div className="quantity-counter">
            <button className="quantity-counter__btn" onClick={props.handlerBtnIncrease.bind(null,count)}>-</button>
            <input type="text" className="quantity-counter__input" defaultValue={count}/>
            <button className="quantity-counter__btn" onClick={props.handlerBtnDecrease.bind(null,count)}>+</button>
        </div>
    )
}

export default QuantityCounter;