import Translate from './index';
import '../../locale/index';
import { render, screen, fireEvent } from '@testing-library/react';

it('Test Translate', () => {
  render(<Translate />);

  const button = screen.getByText('🇪🇸Spanish');
  fireEvent.click(button);

  const button2 = screen.getByText('🇺🇸Inglés');
  fireEvent.click(button2);
});
