import {
    ADD_PRODUCT_TO_WISHLIST,
    REMOVE_PRODUCT_FROM_WISHLIST,
    ADD_PRODUCT_CHECKED_WISHLIST,
    REMOVE_PRODUCT_CHECKED_WISHLIST
} from '../../constants'

export const addProductToWishlist = (product) => {
    return (dispatch) => {
        dispatch({
            type: ADD_PRODUCT_TO_WISHLIST,
            payload: {
                product
            }
        })
    }
}

export const removeProductFromWishlist = (productId) => {
    return (dispatch) => {
        dispatch({
            type: REMOVE_PRODUCT_FROM_WISHLIST,
            payload: {
                productId
            }
        })
    }
}

export const addProductToCheckedWishlist = (product) => {
    return (dispatch) => {
        dispatch({
            type: ADD_PRODUCT_CHECKED_WISHLIST,
            payload: {
                product
            }
        })
    }
}

export const removeProductToCheckedWishlist = (productId) => {
    return (dispatch) => {
        dispatch({
            type: REMOVE_PRODUCT_CHECKED_WISHLIST,
            payload: {
                productId
            }
        })
    }
}