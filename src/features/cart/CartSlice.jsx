import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: {},
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const product = action.payload;
      if (!state.items[product.id]) {
        state.items[product.id] = {
          ...product,
          quantity: 1,
        };
      }
    },
    increaseQuantity: (state, action) => {
      const item = state.items[action.payload];
      if (item) {
        item.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const item = state.items[action.payload];
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
    removeItem: (state, action) => {
      delete state.items[action.payload];
    },
  },
});

export const { addItem, increaseQuantity, decreaseQuantity, removeItem } = cartSlice.actions;

export const selectCartItems = (state) => Object.values(state.cart.items);
export const selectCartCount = (state) =>
  Object.values(state.cart.items).reduce((total, item) => total + item.quantity, 0);
export const selectCartTotal = (state) =>
  Object.values(state.cart.items).reduce((total, item) => total + item.quantity * item.price, 0);

export default cartSlice.reducer;
