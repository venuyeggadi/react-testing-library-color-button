import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders red color button initially and renders blue button when clicked', () => {
  render(<App />)

  const redColorButton = screen.getByRole('button', { name: /change to blue/i })

  expect(redColorButton).toHaveStyle({ backgroundColor: 'red' })

  fireEvent.click(redColorButton)

  const blueColorButton = screen.getByRole('button', { name: /change to red/i })

  expect(blueColorButton).toHaveStyle({ backgroundColor: 'blue' })

  expect(blueColorButton).toHaveTextContent(/change to red/i)
});

