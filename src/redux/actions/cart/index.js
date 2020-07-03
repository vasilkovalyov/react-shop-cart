import { 
    ADD_PRODUCT_TO_CART, 
    REMOVE_PRODUCT_FROM_CART, 
    INCREASE_PRODUCT_IN_CART,
    DECREASE_PRODUCT_IN_CART,
    UPDATE_CART
} from '../../constants'


export const addProductToCart = (product) => {
    return (dispatch) => {
        dispatch({
            type: ADD_PRODUCT_TO_CART,
            payload: {
                product
            }
        })
    }
}

export const removeProductFromCart = (id) => {
    return (dispatch) => {
        dispatch({
            type: REMOVE_PRODUCT_FROM_CART,
            payload: {
                id
            }
        })
    }
}


export const increaseProductCount = (product) => {
    return (dispatch) => {
        dispatch({
            type: INCREASE_PRODUCT_IN_CART,
            payload: {
                product
            }
        })
    }
}

export const decreaseProductCount = (product) => {
    return (dispatch) => {
        dispatch({
            type: DECREASE_PRODUCT_IN_CART,
            payload: {
                product
            }
        })
    }
}

export const updateCart = (cart) => {
    return (dispatch) => {
        dispatch({
            type: UPDATE_CART,
            payload: {
                cart
            }
        })
    }
}