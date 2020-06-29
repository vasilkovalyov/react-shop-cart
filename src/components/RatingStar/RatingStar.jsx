import React from 'react'
import './RatingStar.scss'

function RatingStar({ raiting, raitingClass }) {
    const activeRating = (item) => ( item <= raiting ? '-full' : '' )

    return (
        <ul className={raitingClass}>
            {
                [1,2,3,4,5].map((item, key) => {
                    return (
                        <li className={`${raitingClass}__item`} key={key}>
                            <span className={`icon-star${activeRating(item)}`}></span>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default RatingStar;