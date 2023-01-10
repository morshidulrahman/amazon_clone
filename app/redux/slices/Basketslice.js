import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  items: [],
};
export const BasketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },

    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(
        (basket) => basket.id === action.payload.id
      );
      let newbasket = [...state.items];
      if (index >= 0) {
        newbasket.splice(index, 1);
      } else {
        console.warn(
          ` can't not fid id please ${action.payload.id} push the data`
        );
      }
      state.items = newbasket;
    },
    increaseItemQuantity: (state, action) => {
      state.items = state.items.map((item) => {
        if (item.id !== action.payload) return item;
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      });
    },
    decreaseItemQuantity: (state, action) => {
      state.items = state.items
        .map((item) => {
          if (item.id !== action.payload) return item;
          if (item.quantity === 1) return false;
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        })
        .filter((x) => x !== false);
    },
  },
});

export const {
  addToBasket,
  removeFromBasket,
  addtoProduct,
  decreaseItemQuantity,
  increaseItemQuantity,
} = BasketSlice.actions;

export const SelectedItems = (state) => state.basket.items;
export const baskettotal = (state) =>
  state.basket.items
    .map((x) => x.price * x.quantity)
    .reduce((a, b) => a + b, 0);
export const selectTotalCartItems = (state) =>
  state.basket.items.map((x) => x.quantity).reduce((a, b) => a + b, 0);

export default BasketSlice.reducer;
