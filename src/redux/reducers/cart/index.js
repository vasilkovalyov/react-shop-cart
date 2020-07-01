import { 
    ADD_PRODUCT_TO_CART, 
    REMOVE_PRODUCT_FROM_CART,
    INCREASE_PRODUCT_IN_CART,
    DECREASE_PRODUCT_IN_CART
} from '../../constants'

import { existInArrayById } from '../../../Custom/index'

const initialStore = {
    cart: []
}

const cart = (state = initialStore, {product, id, type}) => {
    switch(type) {
        case ADD_PRODUCT_TO_CART:
            return addProductToCart(state, product);

        case REMOVE_PRODUCT_FROM_CART: 
            return removeProductToCart(state, product, id);

        case INCREASE_PRODUCT_IN_CART:
            return increaseProductCount(state, product);
        
        case DECREASE_PRODUCT_IN_CART:
            return decreaseProductCount(state, product);
        
        default:
            return state;
    }
}

export default cart;

function addProductToCart(state, product) {
    const productInCart = existInArrayById(state.cart, product.id);

    if(productInCart.length === 0) {
        product.inCart = true;
        product.count = 1;

        return {
            ...state,
            cart: [...state.cart, product]
        }
        
    } else {
        product.count += 1;
        return {
            ...state,
            cart: [...state.cart]
        }
    }
}

function removeProductToCart(state, product, id) {
    let newProductArray = state.cart.filter(product => product.id !== id);

    return {
        ...state,
        cart: newProductArray
    }
}

function increaseProductCount(state, product) {
    product.count += 1;

    return {
        ...state,
        cart: [...state.cart]
    }
}

function decreaseProductCount(state, product) {
    console.log(product.count);
    if (product.count > 0) {
        product.count -= 1;

        return {
            ...state,
            cart: [...state.cart]
        }
    }
}
