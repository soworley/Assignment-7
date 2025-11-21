import { render, screen } from '@testing-library/react';
import React from 'react';
import App from '../../App';

test('renders app root', () => {
  render(<App />);
  // If your App contains some text, adapt accordingly:
  expect(document.body).toBeTruthy();
});
