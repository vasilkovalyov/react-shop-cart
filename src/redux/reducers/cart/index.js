import { 
    ADD_PRODUCT_TO_CART, 
    REMOVE_PRODUCT_FROM_CART 
} from '../../constants'

const initialStore = {
    cart: []
}

const cart = (state = initialStore, {product, id, type}) => {
    switch(type) {
        case ADD_PRODUCT_TO_CART:
            return {
                ...state,
                cart: [...state.cart, product]
            }

        case REMOVE_PRODUCT_FROM_CART: 
            let newProductArray = state.cart.filter(product => product.id !== id);

            return {
                ...state,
                cart: newProductArray
            }

        default:
            return state;
    }
}

export default cart;