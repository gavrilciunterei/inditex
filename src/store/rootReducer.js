import { combineReducers } from 'redux';
import { product } from './rtk/product';
import cart from './slice/cart';

const rootReducer = combineReducers({
  [product.reducerPath]: product.reducer,
  cart,
});

export default rootReducer;
