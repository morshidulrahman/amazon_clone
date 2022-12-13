import { configureStore } from '@reduxjs/toolkit'
import BasketReducer from "./slices/Basketslice"
import AuthReducer from "./slices/Authslice"
import ProductReducer from "./slices/Productslice"
export const store = configureStore({
    reducer: {
        basket: BasketReducer,
        auth: AuthReducer,
        product: ProductReducer
    },
})