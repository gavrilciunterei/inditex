import React from 'react';
import Cart from './index';
import '../../locale/index';
import { render } from '../../utils/test-utils-render';
import { configureStore } from '@reduxjs/toolkit';
import reducer from '../../store/rootReducer';

const initialState = {
  cart: {
    cartProducts: [
      {
        img: 'ss',
        model: 'ss',
        brand: 'ss',
        color: 'ss',
        storage: 'ss',
        price: 'ss',
        quantity: 'ss',
      },
      {
        img: 'ss',
        model: 'ss',
        brand: 'ss',
        color: 'ss',
        storage: 'ss',
        price: 'ss',
        quantity: 'ss',
      },
    ],
  },
};

it('Test Cart empty', () => {
  render(<Cart />);
});

it('Test Cart one item', async () => {
  const store = configureStore({
    reducer,
    preloadedState: initialState,
  });

  render(<Cart />, initialState, store);
});
