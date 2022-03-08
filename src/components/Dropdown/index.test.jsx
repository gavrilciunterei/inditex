import Dropdown from './index';
import '../../locale/index';
import { render, screen, fireEvent } from '@testing-library/react';

it('Test Dropdown', () => {
  render(
    <Dropdown
      outElement={<h1>Elemento fuera</h1>}
      insideElement={<button>Botón</button>}
    />
  );

  const button = screen.getByText('Elemento fuera');
  fireEvent.click(button);

  const button2 = screen.getByText('Botón');
  fireEvent.click(button2);

  const element = screen.getByTestId('custom-element');
  fireEvent.click(element);
});
