import { render, screen } from '@testing-library/react';
import App from '../../App.jsx';

test('renders app title or UI element', () => {
  render(<App />);
  const title = screen.getByText(/recipe/i);
  expect(title).toBeInTheDocument();
});