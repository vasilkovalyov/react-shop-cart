import React from 'react'
import './WishCard.scss'

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { 
    removeProductFromWishlist, 
    addProductToCheckedWishlist, 
    removeProductToCheckedWishlist  
} from '../../redux/actions/wishlist/index'

const WishCard = (props) => {
    let {id, image, name, price, currency} = props.product;

    let checkWishProduct = (product, checked) => {
        if(checked) {
            props.addProductToCheckedWishlist(product)
        } else {
            props.removeProductToCheckedWishlist(product.id)
        }
    }

    return (
        <div className="wishcard">
            <div className="wishcard__image">
                <input type="checkbox" onChange={(e) => checkWishProduct(props.product, e.target.checked) } />
                <button className="wishcard__btn-remove" onClick={() => props.removeProductFromWishlist(id)}>x</button>
                <img src={`./images/${image}`} alt={name}/>
            </div>
            <div className="wishcard__body">
                <h5>
                    <Link to={`/product/${id}`} className="wishcard__name">{name}</Link>
                </h5>
                <span className="wishcard__price">{price}{currency}</span>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeProductFromWishlist: (productId) => {
            dispatch(removeProductFromWishlist(productId))
        },
        addProductToCheckedWishlist: (product) => {
            dispatch(addProductToCheckedWishlist(product))
        },
        removeProductToCheckedWishlist: (idProduct) => {
            dispatch(removeProductToCheckedWishlist(idProduct))
        }
    }
}

export default connect(null, mapDispatchToProps)(WishCard);