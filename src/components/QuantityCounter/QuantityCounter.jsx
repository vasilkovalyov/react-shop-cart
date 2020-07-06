import React from 'react'
import './QuantityCounter.scss'

function QuantityCounter(props) {
    let {count} = props;

    return (
        <div className="quantity-counter">
            <button className="quantity-counter__btn" disabled={ count === 1 ? true : false} onClick={ () => props.handlerBtnDecrease(count)}>-</button>
            <input type="text" className="quantity-counter__input" value={count} onChange={ (inputValue) => props.handlerChangeInput(inputValue) } />
            <button className="quantity-counter__btn" onClick={ () => props.handlerBtnIncrease(count)}>+</button>
        </div>
    )
}

export default QuantityCounter;