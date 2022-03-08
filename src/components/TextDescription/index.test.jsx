import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import TextDescription from './index';

test('TextDescription', () => {
  render(<TextDescription text={'Test'} />);
  screen.getByText('Test:');
});
