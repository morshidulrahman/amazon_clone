import { configureStore } from '@reduxjs/toolkit'
import BasketReducer from "./slices/Basketslice"

export const store = configureStore({
    reducer: {
        basket: BasketReducer,
    },
})