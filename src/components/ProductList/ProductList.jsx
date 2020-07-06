import React from 'react'
import './ProductList.scss'

import Product from '../Product/Product'


function ProductList({products}) {
    return (
        <div className="product-list">
            {
                products.map((product) => {
                    return (
                        <div className="col" key={product.id} >
                            <Product product={product} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ProductList;