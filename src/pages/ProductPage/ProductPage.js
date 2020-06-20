import React, { Component } from 'react';
import './ProductPage.scss';
import axios from 'axios';
import Product from '../../components/Product/Product'

class ProductPage extends Component {
    state = {
        id: this.props.match.params.id,
        isLoad: false,
        product: {}
    }

    componentWillMount() {
        this.loadProduct();
    }

    loadProduct() {
        axios("../products.js")
        .then(response => {
            this.setState({
                product: response.data[this.state.id - 1],
                isLoad: true
            })
        })
    }

    getProduct() {

    }

    render() {
        return (
            <section className="product-page">
                <div className="container">
                    { !this.state.isLoad ? null : <Product product={this.state.product}/> }
                </div>
            </section>
        );
    }
}

export default ProductPage;
