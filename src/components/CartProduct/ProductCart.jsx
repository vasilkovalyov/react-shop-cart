import React, {Component} from 'react';
import './ProductCart.scss';

import RatingStar from '../RatingStar/RatingStar'
import { Link } from 'react-router-dom';

import QuantityCounter from '../QuantityCounter/QuantityCounter'
import { connect } from 'react-redux';

import { 
    removeProductFromCart,
    increaseProductCount,
    decreaseProductCount,
    changeCountProductInCart
} from '../../redux/actions/cart/index'


class CartProduct extends Component {

    state = {
        counterProduct: this.props.product.count,
    }

    
    changeInput(input, idProduct) {
        this.setState({
            counterProduct: parseInt(input)
        })
        
        this.props.changeCountProductInCart(idProduct, input)
    }

    btnCounter() {
        this.setState({
            counterProduct: parseInt(this.props.product.count)
        })
    }

    getCalcPriceProduct = (price, countProduct) => parseFloat(price) * parseInt(countProduct);

    render() {
        let {id, image, price, currency, name, raiting} = this.props.product;


        return (
            <tr className="product-cart">
                
                <td className="product-cart__image-cell">
                    <div className="product-cart__image">
                        <img src={`../images/${image}`} alt={name}/>
                    </div>
                </td>
                <td className="product-cart__name-cell">
                    <Link to={`/product/${id}`} href="#" className="product-cart__name">{name}</Link>
                    <RatingStar raiting={raiting} raitingClass="product__list-rating"/>
                </td>
                <td className="product-cart__quantity-cell">
                        <QuantityCounter 
                        handlerBtnIncrease = {() => {
                            this.props.increaseProductCount(id);
                            this.btnCounter()
                        }}
                        count={this.state.counterProduct}
                        handlerBtnDecrease = {() => { 
                            this.props.decreaseProductCount(id);
                            this.btnCounter()
                        }}
                        handlerChangeInput = { (e) => this.changeInput(e.target.value, id) }
                    />
                </td>
                <td className="product-cart__price-cell">
                    <span className="product-cart__price">{price}{currency}</span>
                </td>
                <td className="product-cart__total-price-cell">
                    <span className="product-cart__total-price">{this.getCalcPriceProduct(price, this.state.counterProduct)}{currency}</span>
                </td>
                <td className="product-cart__remove-cell">
                    <button className="product-cart__remove" onClick={() => this.props.removeProductFromCart(id)}>x</button>
                </td>
            </tr>
        )
    }
}



const mapDispatchToProps = (dispatch) => {
    return {
        removeProductFromCart: (idProduct) => {
            dispatch(removeProductFromCart(idProduct));
        },
        
        increaseProductCount: (idProduct) => {
            dispatch(increaseProductCount(idProduct));
        },

        decreaseProductCount: (idProduct) => {
            dispatch(decreaseProductCount(idProduct));
        },

        changeCountProductInCart: (idProduct, countProduct) => {
            dispatch(changeCountProductInCart(idProduct, countProduct));
        }
    }
}

export default connect(null, mapDispatchToProps)(CartProduct);