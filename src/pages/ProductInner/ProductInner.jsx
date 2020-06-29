import React, { Component } from 'react'

import RatingStar from '../../components/RatingStar/RatingStar'

import axios from 'axios'

class ProductInner extends Component {
    state = {
        id: this.props.match.params.id,
        product: null,
        isLoad: false
    }

    componentDidMount() {
        this.axiosProduct();
    }


    axiosProduct() {
        axios.get('../products.json')
        .then(response => response.data)
        .then(data => {
            const targetProduct = data.filter(product => {
                return product.id === parseInt(this.state.id);
            })
            this.setState({
                product: targetProduct[0],
                isLoad: true
            })
        })
    }



    render() {
        return (
            <section className="section-product-inner">
                <div className="container">
                    <div className="image">
                        <img src={`../images/${this.state.isLoad ? this.state.product.image : ''}`} alt={this.state.isLoad ? this.state.product.name : ''}/>
                    </div>
                    <div className="description">
                        <strong className="title">{this.state.isLoad ? this.state.product.name : ''}</strong>
                        <RatingStar raiting={this.state.isLoad ? this.state.product.raiting : ''} raitingClass="product__list-rating" />
                        <span className="price">{this.state.isLoad ? this.state.product.price : ''}</span>
                    </div>
                </div>
            </section>
        )
    }
}

export default ProductInner;