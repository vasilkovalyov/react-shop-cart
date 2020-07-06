import {
    ADD_PRODUCT_TO_WISHLIST
} from '../../constants'

import { existInArrayById } from '../../../Custom/index'

const initialStore = {
    wishlist: []
}

const cart = (state = initialStore, action) => {
    switch(action.type) {
        case ADD_PRODUCT_TO_WISHLIST:
            return addProductToWishlist(state, action.payload.product);
        
        default :
            return state;
    }
}

export default cart;



function addProductToWishlist(state, product) {

    const productInArray = existInArrayById(state.wishlist, product.id);
    if(productInArray.length === 0) {
        return {
            ...state,
            wishlist: [...state.wishlist, product]
        }
    } 

    return {
        ...state
    }
}