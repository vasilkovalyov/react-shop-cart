import React from 'react'
import './WishList.scss'

import WishCard from '../WishCard/WishCard'

function WishList({products}) {
    return (
        <div className="wishlist">
            {
                products.map((product, key) => {
                    return (
                        <div className="col" key={key}>
                            <WishCard product={product} />
                        </div>
                    )
                })
            }
        </div>
    )
    
}

export default WishList;