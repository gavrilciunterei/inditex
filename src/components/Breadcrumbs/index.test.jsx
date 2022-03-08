import React from 'react';
import renderer from 'react-test-renderer';
import Breadcrumbs from './Breadcrumbs';
import { routes } from '../../routes';
import { MemoryRouter } from 'react-router-dom';

it('Test Breadcrumbs', () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <Breadcrumbs routes={routes} currentPath={'/'} />
      </MemoryRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('Test Breadcrumbs Detail', () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <Breadcrumbs routes={routes} currentPath={'/detail/aaaa'} />
      </MemoryRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
