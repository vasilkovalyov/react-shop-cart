
import React, { Component } from 'react'
import './Shop.scss';
import axios from 'axios';
import ProductsList from '../../components/ProductsList/ProductsList'

class Shop extends Component {
    state = {
        products: [],
        isLoad: false
    }

    componentWillMount() {
        this.getAxiosProduct();
    }

    getAxiosProduct() {
        axios("./products.js")
        .then(response => {
            this.setState({
                products: response.data,
                isLoad: true
            })
        })
    }
    
    render() {
        return (
            <section className="shop-page">
                <div className="container">
                    <h1>Shop page</h1>
                    { !this.state.isLoad ? null : <ProductsList products={this.state.products}/> }
                </div>
            </section>
        );
    }
    
}

export default Shop;
