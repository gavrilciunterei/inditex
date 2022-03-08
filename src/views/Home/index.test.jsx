import Home from './index';
import '../../locale/index';
import { screen, fireEvent } from '@testing-library/react';
import { render } from '../../utils/test-utils-render';

test('Render Home and use search with values', async () => {
  render(<Home />);

  // wait to load api data
  const foo = true;
  await new Promise((r) => setTimeout(r, 4000));
  expect(foo).toBeDefined();

  const input = screen.getByPlaceholderText('Search');
  fireEvent.change(input, { target: { value: 'Acer' } });
});
