import { 
    ADD_PRODUCT_TO_CART, 
    REMOVE_PRODUCT_FROM_CART,
    INCREASE_PRODUCT_IN_CART,
    DECREASE_PRODUCT_IN_CART,
    UPDATE_CART
} from '../../constants'

import { existInArrayById, setValuePropsByIdAndGetData } from '../../../Custom/index'

const initialStore = {
    cart: []
}

// {product, id, cart, type}

const cart = (state = initialStore, action ) => {
    switch(action.type) {
        case ADD_PRODUCT_TO_CART:
            return addProductToCart(state, action.payload.product);

        case REMOVE_PRODUCT_FROM_CART: 
            return removeProductToCart(state, action.payload.product, action.payload.id);

        case INCREASE_PRODUCT_IN_CART:
            return increaseProductCount(state, action.payload.product);
        
        case DECREASE_PRODUCT_IN_CART:
            return decreaseProductCount(state, action.payload.product);
        
        case UPDATE_CART: 
            return {
                ...cart
            }
        
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
    const targetProduct = existInArrayById(state.cart, product.id);
    
    targetProduct[0].count += 1
    // const newArray = setValuePropsByIdAndGetData(state.cart, 'count', product.id, targetProduct[0].count);

    // return {
    //     ...state,
    //     cart: [...newArray]
    // }
    console.log(state);
    console.log(state.cart);
    const arr = state.cart.map(item => {
        if (item.id === product.id) {
            return {...item, quantity: product.count + 1}
        };
    });


    return {
        ...state,
        arr
    };
}

function decreaseProductCount(state, product) {
    if (product.count > 0) {
        const targetProduct = existInArrayById(state.cart, product.id);
        product.count -= 1;

        return {
            ...state,
            cart: [...state.cart]
        }
    }
}
// product.count += 1;
// return {
    //     ...state,
    //     cart: [...state.cart]
    // }