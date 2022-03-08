import React from 'react';
import renderer from 'react-test-renderer';
import Button from './index';

it('Test Button', () => {
  const tree = renderer
    .create(<Button text="Texto" handleOnClick={true} disabled={false} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
