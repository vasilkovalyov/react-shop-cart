import { 
    ADD_PRODUCT_TO_CART, 
    REMOVE_PRODUCT_FROM_CART, 
} from '../../constants'


export const addProductToCart = (product) => ({
    type: ADD_PRODUCT_TO_CART,
    product
})

export const removeProductFromCart = (id) => ({
    type: REMOVE_PRODUCT_FROM_CART,
    id
})