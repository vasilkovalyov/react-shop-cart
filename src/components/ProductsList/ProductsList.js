import React from 'react';
import './ProductsList.scss';
import Product from '../ProductCard/ProductCard'

function ProductsList(props) {
    const products = props.products;

    const getProducts = products.map((item) => {
        return <div className="products__col" key={item.id}>
            <Product product={item}/>
        </div>
    })

    return (
       <div className="products">
           { getProducts }
       </div>
    )
}

export default ProductsList;
