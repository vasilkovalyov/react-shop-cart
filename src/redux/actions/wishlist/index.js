import {
    ADD_PRODUCT_TO_WISHLIST
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