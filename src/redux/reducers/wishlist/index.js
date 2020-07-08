import {
    ADD_PRODUCT_TO_WISHLIST,
    REMOVE_PRODUCT_FROM_WISHLIST,
    ADD_PRODUCT_CHECKED_WISHLIST,
    REMOVE_PRODUCT_CHECKED_WISHLIST
} from '../../constants'

import { existInArrayById } from '../../../Custom/index'

const initialStore = {
    wishlist: [],
    wishlistLength: 0,
    checkedWishlist: []
}

const cart = (state = initialStore, action) => {
    switch(action.type) {
        case ADD_PRODUCT_TO_WISHLIST:
            return addProductToWishlist(state, action.payload.product);
        case REMOVE_PRODUCT_FROM_WISHLIST:
            return removeProductFromWishlist(state, action.payload.productId)
        case ADD_PRODUCT_CHECKED_WISHLIST :
            return addProductToCheckedWishlist(state, action.payload.product)
        case REMOVE_PRODUCT_CHECKED_WISHLIST :
            return removeProductToCheckedWishlist(state, action.payload.productId)
        default :
            return state;
    }
}

export default cart;



function addProductToWishlist(state, product) {

    const productInArray = existInArrayById(state.wishlist, product.id);
    if(productInArray.length === 0) {
        product.inWishlist = true;

        return {
            ...state,
            wishlist: [...state.wishlist, product],
            wishlistLength: state.wishlistLength + 1
        }
    } 

    return {
        ...state
    }
}

function removeProductFromWishlist(state, productId) {
    let newWishlistArray = state.wishlist.filter(product => product.id !== productId);

    return {
        ...state,
        wishlist: newWishlistArray,
        wishlistLength: newWishlistArray.length
    }
}


function addProductToCheckedWishlist(state, product) {
    return {
        ...state,
        checkedWishlist: [...state.checkedWishlist, product]
    }
}

function removeProductToCheckedWishlist(state, productId) {
    let newWishlistArray = state.checkedWishlist.filter(product => product.id !== productId);

    return {
        ...state,
        checkedWishlist: newWishlistArray
    }
}