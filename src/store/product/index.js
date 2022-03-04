import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Product from '../../services/product';

export const getAllProducts = createAsyncThunk(
  'product/getAllProducts',
  async (data, { rejectWithValue }) => {
    try {
      return await Product.getAll();
    } catch (err) {
      let errorMessage;
      if (err.status === 404) {
        errorMessage = 'NOT_FOUND';
      } else if (err) {
        errorMessage = 'BAD_REQUEST';
      }
      return rejectWithValue({
        error: errorMessage,
      });
    }
  }
);

export const initialState = {
  allProducts: [],
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    cleanData: () => initialState,
  },
  extraReducers: {
    [getAllProducts.pending]: (state) => {
      state.getAllProductsLoading = true;
      state.getAllProductsError = null;
    },
    [getAllProducts.fulfilled]: (state, action) => {
      state.allProducts = action.payload.data;
      state.getAllProductsLoading = false;
      state.getAllProductsError = null;
    },
    [getAllProducts.rejected]: (state, action) => {
      state.getAllProductsLoading = false;
      state.getAllProductsError = action.payload.error;
    },
  },
});

export const { cleanData } = productSlice.actions;
export default productSlice.reducer;
