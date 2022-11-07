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
      removeFromBasket: (state, action) => {
         const index = state.items.findIndex(basket => basket.id === action.payload.id)
         let newbasket = [...state.items]
         if (index >= 0) {
            newbasket.splice(index, 1)
         } else {
            console.warn(` can't not fid id please ${action.payload.id} push the data`)
         }
         state.items = newbasket
      }
   },
})


export const { addToBasket, removeFromBasket } = BasketSlice.actions

export const SelectedItems = (state) => state.basket.items
export const baskettotal = (state) => state.basket.items.reduce((total, item) => (total += item.price), 0)

export default BasketSlice.reducer