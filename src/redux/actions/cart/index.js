import { 
    ADD_PRODUCT_TO_CART, 
    REMOVE_PRODUCT_FROM_CART, 
    INCREASE_PRODUCT_IN_CART,
    DECREASE_PRODUCT_IN_CART,
} from '../../constants'


export const addProductToCart = (product) => {
    return (dispatch) => {
        dispatch({
            type: ADD_PRODUCT_TO_CART,
            product
        })
    }
}

export const removeProductFromCart = (id) => {
    return (dispatch) => {
        dispatch({
            type: REMOVE_PRODUCT_FROM_CART,
            id
        })
    }
}


export const increaseProductCount = (product) => {
    return (dispatch) => {
        dispatch({
            type: INCREASE_PRODUCT_IN_CART,
            product
        })
    }
}

export const decreaseProductCount = (product) => {
    return (dispatch) => {
        dispatch({
            type: DECREASE_PRODUCT_IN_CART,
            product
        })
    }
}