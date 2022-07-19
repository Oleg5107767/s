//import { createStore } from 'redux';
//import reducer from '../reducer/index';
//
//const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
//
//export default store;
import { configureStore } from '@reduxjs/toolkit';
import sheet from '../components/categoryProduct/CategoryProductSlice';
import items from '../components/cartItem/CartItemSlice';

const stringMiddleware = () => (next) => (action) => {
    if(typeof action === 'string') {
            return next({
                    type: action
            })
    }
    return next(action)
};

const store = configureStore({
    reducer: {sheet, items},
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(stringMiddleware),
    //devTools: process.env.NODE_ENV !== 'production',
})

export default store;