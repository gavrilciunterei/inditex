import React from 'react';
import Navbar from './index';
import '../../locale/index';
import { render } from '../../utils/test-utils-render';
import { screen } from '@testing-library/react';

it('Test navbar', () => {
  render(<Navbar />);
  screen.getByText('Store');
});
