import { combineReducers } from 'redux';
import { product } from './product';
import cart from './cart';

const rootReducer = combineReducers({
  [product.reducerPath]: product.reducer,
  cart,
});

export default rootReducer;
