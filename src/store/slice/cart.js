import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartProducts: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    updateCart(state, action) {
      const exists = state.cartProducts.findIndex(
        (item) =>
          item.id === action.payload.id &&
          item.colorCode === action.payload.colorCode &&
          item.storageCode === action.payload.storageCode
      );

      if (exists >= 0) {
        state.cartProducts[exists].quantity += 1;
      } else {
        state.cartProducts.push(action.payload);
      }
    },
    deleteItem(state, action) {
      state.cartProducts.splice(action.payload, 1);
    },
  },
});

export const { updateCart, deleteItem } = cartSlice.actions;
export default cartSlice.reducer;
