import { combineReducers } from 'redux'

import cart from './cart/index'
import wishlist from './wishlist/index'


const rootReducer = combineReducers({
    cart,
    wishlist
})

export default rootReducer;