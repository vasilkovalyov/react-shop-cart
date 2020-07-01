import { createStore, applyMiddleware  } from 'redux' 
import rootReducer from '../reducers/index'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'


const configureStore = (state) => {
    return createStore(
        rootReducer,
        composeWithDevTools(
            applyMiddleware(thunk)
        )
    );
}

const store = configureStore({})

export default store;