/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import SelectInput from './index';
import { render } from '@testing-library/react';
import selectEvent from 'react-select-event';

const defaultValue = { code: 'chocolate', name: 'Chocolate' };
const OPTIONS = [
  { code: 'chocolate', name: 'Chocolate' },
  { code: 'strawberry', name: 'Strawberry' },
  { code: 'vanilla', name: 'Vanilla' },
];

it('Test Write input', async () => {
  const { getByText } = render(
    <SelectInput
      defaultValue={defaultValue}
      options={OPTIONS}
      text="InputText"
      inputId="InputTest"
      onChange={() => true}
    />
  );
  await selectEvent.select(getByText('Chocolate'), 'Strawberry');

  selectEvent.openMenu(getByText('Strawberry'));
  expect(getByText('Vanilla')).toBeInTheDocument();
});
