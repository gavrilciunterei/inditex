import React from 'react';
import renderer from 'react-test-renderer';
import {
  ArrowIcon,
  CartIcon,
  Delete,
  Dots,
  HomeIcon,
  SearchIcon,
  SpinnerIcon,
} from './index';

it('Test Spinner', () => {
  const tree = renderer
    .create(
      <>
        <ArrowIcon /> <CartIcon />
        <Delete />
        <Dots />
        <HomeIcon />
        <SearchIcon />
        <SpinnerIcon />
      </>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
