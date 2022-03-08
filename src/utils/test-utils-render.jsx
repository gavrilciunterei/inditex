import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import cartReducer from '../store/rootReducer';
import { MemoryRouter } from 'react-router-dom';
import { product } from '../store/rtk/product';
function render(
  ui,
  {
    preloadedState,
    store = configureStore({
      reducer: cartReducer,
      preloadedState,
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(product.middleware),
    }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return (
      <MemoryRouter>
        <Provider store={store}>{children}</Provider>
      </MemoryRouter>
    );
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from '@testing-library/react';
// override render method
export { render };
