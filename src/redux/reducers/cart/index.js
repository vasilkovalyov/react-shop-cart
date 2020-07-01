import { ADD_PRODUCT_TO_CAR } from '../../constants'

const initialStore = {
    cart: []
}

const cart = (state = initialStore, {product, type}) => {
    switch(type) {
        case ADD_PRODUCT_TO_CAR:
            
            return {
                ...state,
                cart: [...state.cart, product]
            }

        default:
            return state;
    }
}

export default cart;