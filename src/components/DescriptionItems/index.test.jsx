import React from 'react';
import renderer from 'react-test-renderer';
import DescriptionItems from './index';

it('Test DescriptionItems', () => {
  const tree = renderer
    .create(<DescriptionItems name="Test " text="DescriptionItems" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('Test DescriptionItems with object', () => {
  const tree = renderer
    .create(<DescriptionItems name="Prueba" text={['test', 'object']} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
