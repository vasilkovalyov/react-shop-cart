import React from 'react'

function HeaderAdditionalList() {
    const list = ['icon-heart','icon-shopping']

    return (
        <div className="header-additional">
            <ul className="header-additional__list">
                {
                    list.map((item, key) => (
                        <div className={`header-additional__item ${item}`} key={key}></div>
                    ))
                }
            </ul>   
        </div>
    )
}

export default HeaderAdditionalList;