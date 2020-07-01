import { ADD_PRODUCT_TO_CAR } from '../../constants'


export const addProductToCart = (product) => ({
    type: ADD_PRODUCT_TO_CAR,
    product
})