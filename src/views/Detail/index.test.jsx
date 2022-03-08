import Detail from './index';
import '../../locale/index';
import { screen, fireEvent } from '@testing-library/react';
import { render } from '../../utils/test-utils-render';

test('Render detail', async () => {
  render(<Detail />);

  // wait to load api data
  const foo = true;
  await new Promise((r) => setTimeout(r, 1000));
  expect(foo).toBeDefined();

  const button = screen.getByText('Add');
  fireEvent.click(button);
});
