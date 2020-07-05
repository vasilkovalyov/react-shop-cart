import { 
    ADD_PRODUCT_TO_CART, 
    REMOVE_PRODUCT_FROM_CART,
    INCREASE_PRODUCT_IN_CART,
    DECREASE_PRODUCT_IN_CART,
    CHANGE_COUNT_PRODUCT_IN_CART
} from '../../constants'

import { existInArrayById, setValuePropsByIdAndGetData } from '../../../Custom/index'

const initialStore = {
    cart: [],
    cartLength: 0
}

const cart = (state = initialStore, action) => {
    switch(action.type) {
        case ADD_PRODUCT_TO_CART:
            return addProductToCart(state, action.payload.product);

        case REMOVE_PRODUCT_FROM_CART: 
            return removeProductToCart(state, action.payload.id);

        case INCREASE_PRODUCT_IN_CART:
            return increaseProductCount(state, action.payload.id);
        
        case DECREASE_PRODUCT_IN_CART:
            return decreaseProductCount(state, action.payload.id);
        
        case CHANGE_COUNT_PRODUCT_IN_CART:
            return changeCountProductInCart(state, action.payload.id, action.payload.count);
        
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
            cart: [...state.cart, product],
            cartLength: state.cartLength + 1
        }
        
    } else {
        product.count += 1;

        return {
            cart: [...state.cart],
            cartLength: state.cartLength + 1
        }
    }
}

function removeProductToCart(state, idProduct) {
    let newProductArray = state.cart.filter(product => product.id !== idProduct);
    let targetProduct = state.cart.filter(product => product.id === idProduct);

    return {
        cart: newProductArray,
        cartLength: state.cartLength - targetProduct[0].count
    }
}

function increaseProductCount(state, idProduct) {
    const targetProduct = existInArrayById(state.cart, idProduct);
    targetProduct[0].count += 1
    const newArray = setValuePropsByIdAndGetData(state.cart, 'count', idProduct, targetProduct[0].count);

    return {
        cart: [...newArray],
        cartLength: state.cartLength + 1
    }
}

function decreaseProductCount(state, idProduct) {
    const targetProduct = existInArrayById(state.cart, idProduct);
    targetProduct[0].count -= 1;

    if (targetProduct[0].count > 0) {
        return {
            cart: [...state.cart],
            cartLength: state.cartLength - 1
        }
    } 
}

function changeCountProductInCart(state, idProduct, countProduct) {
    const targetProduct = existInArrayById(state.cart, idProduct);
    targetProduct.count = countProduct;

    const newArray = setValuePropsByIdAndGetData(state.cart, 'count', idProduct, targetProduct[0].count);
    const newCartLength = newArray.reduce((accumulator, targetProduct) => accumulator + targetProduct.count, countProduct);

    return {
        cart: [...newArray],
        cartLength: newCartLength
    }
}
