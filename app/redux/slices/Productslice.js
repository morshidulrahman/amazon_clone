import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    products: []
}
export const ProductSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addtoProduct: (state, action) => {
            state.products = action.payload
        }

    }
})


export const { addtoProduct } = ProductSlice.actions
export const SelectProducts = (state) => state.product.products

export default ProductSlice.reducer