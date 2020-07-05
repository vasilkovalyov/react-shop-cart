import React, { Fragment } from 'react';
import './CartList.scss';

import ProductCart from '../CartProduct/ProductCart'

function CartList({products}) {

    const table = () => {
        return (
            <table className="cart-table">
                <thead className="cart-table__head">
                    <tr>
                        <th>TEME</th>
                        <th>NAME</th>
                        <th>QUANTITY</th>
                        <th>PRICE</th>
                        <th>TOTAL PRICE</th>
                        <th>REMOVE</th>
                    </tr>
                </thead>
                <tbody className="cart-table__body">
                    {
                        products.map((product, key) => {
                            return (
                                <Fragment key={key}>
                                    <ProductCart product={product} c={product.count}/>
                                </Fragment>
                            )
                        })
                    }
                </tbody>
            </table>
        )
    }

    return (
        <div className="cart-list">
            { products.length > 0 ? table() : <h2>Cart is empry</h2> }
        </div>
    )
}


export default CartList;