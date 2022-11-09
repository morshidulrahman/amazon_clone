import { configureStore } from '@reduxjs/toolkit'
import BasketReducer from "./slices/Basketslice"
import AuthReducer from "./slices/Authslice"
export const store = configureStore({
    reducer: {
        basket: BasketReducer,
        auth: AuthReducer
    },
})