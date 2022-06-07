import thunk from 'redux-thunk';
import {configureStore } from '@reduxjs/toolkit'
import reducers from './reducers';

const store = configureStore({
    reducer: reducers, 
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(thunk)
});

export  { store };