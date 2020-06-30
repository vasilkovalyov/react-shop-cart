import React from 'react'
import './HeaderInfoPanel.scss'

function HeaderInfoPanel() {

    return (
        <div className="header-info-panel">
            <div className="info-circle">
                <span className="info-circle__icon-holder">
                    <span className="icon-heart"></span>
                    <span className="info-circle__counter">0</span>
                </span>
            </div>
            <div className="info-circle">
                <span className="info-circle__icon-holder">
                    <span className="icon-shopping"></span>
                    <span className="info-circle__counter">0</span>
                </span>
                <span className="price">$0.00</span>
            </div>
        </div>
    )
}

export default HeaderInfoPanel;