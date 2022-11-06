import { createSlice } from '@reduxjs/toolkit'
const initialState = {
   items: []
}
export const BasketSlice = createSlice({
   name: 'basket',
   initialState,
   reducers: {
      addToBasket: (state, action) => {
         state.items = [...state.items, action.payload]
      },
      removeFromBasket: (state, action) => { }
   },
})


export const { addToBasket, removeFromBasket } = BasketSlice.actions

export const SelectedItems = (state) => state.basket.items

export default BasketSlice.reducer