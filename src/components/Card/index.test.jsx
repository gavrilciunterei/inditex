import React from 'react';
import renderer from 'react-test-renderer';
import Card from './index';
import { MemoryRouter } from 'react-router';

it('Test Card with price', () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <Card
          img="http://img.com"
          id="1"
          model="Predator"
          brand="Acer"
          price="100"
        />
      </MemoryRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('Test Card without price', () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <Card
          img="http://img.com"
          id="1"
          model="Predator"
          brand="Acer"
          price=""
        />
      </MemoryRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
