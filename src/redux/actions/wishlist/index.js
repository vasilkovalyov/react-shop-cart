import {
    ADD_PRODUCT_TO_WISHLIST,
    REMOVE_PRODUCT_FROM_WISHLIST
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