import React from 'react';
import renderer from 'react-test-renderer';
import Search from './index';
import { render, screen, fireEvent } from '@testing-library/react';

it('Test Search', () => {
  const tree = renderer
    .create(<Search name="search" action={() => true} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('Test Write input', () => {
  render(<Search name="search" action={() => true} />);
  const input = screen.getByPlaceholderText('search');
  fireEvent.change(input, { target: { value: 'Acer' } });
});
