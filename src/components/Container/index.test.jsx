import React from 'react';
import renderer from 'react-test-renderer';
import Container from './index';

it('Test Container', () => {
  const tree = renderer
    .create(
      <Container>
        <div>
          <h1>Prueba container</h1>
        </div>
      </Container>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
