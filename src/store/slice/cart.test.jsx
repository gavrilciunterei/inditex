import '@testing-library/jest-dom/extend-expect';
import reducer, { deleteItem, updateCart } from './cart';

const initialStateEmpty = {
  cartProducts: [],
};

const initialStateItem = {
  cartProducts: [{ id: 1, colorCode: 1, storageCode: 1 }],
};

const newItemAddedState = {
  cartProducts: [
    { id: 1, colorCode: 1, storageCode: 1 },
    { id: 2, colorCode: 2, storage: 2 },
  ],
};

test('should delete item from storage', () => {
  expect(reducer(initialStateItem, deleteItem(0))).toEqual({
    ...initialStateEmpty,
  });
});

test('should add new item to cartProducts', () => {
  expect(
    reducer(initialStateItem, updateCart({ id: 2, colorCode: 2, storage: 2 }))
  ).toEqual(newItemAddedState);
});
