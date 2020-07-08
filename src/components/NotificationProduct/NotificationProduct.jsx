import React, { Fragment } from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group';


const NotificationProduct = ({ message, cls, isActive}) => {
    const notification = () => {
        return (
            <CSSTransition 
                timeout={300}
                classNames="notification"
            >
                <div className={`${cls}notification`}><p>{ message }</p></div>
            </CSSTransition>
        )
    }

    return (
        <Fragment>
            <TransitionGroup>
                { isActive ? notification() : null }
            </TransitionGroup>
        </Fragment>
    )
}

export default NotificationProduct;