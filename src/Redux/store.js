import { configureStore } from '@reduxjs/toolkit';

import customerReducer from './customerSlice'

export const store = configureStore({
    devTool:true,
    reducer:{
        customer:customerReducer
    }
})