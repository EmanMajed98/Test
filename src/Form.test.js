import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import Form from './form';

test('Form renders the button and input elements correctly', () => {
  render(<Form />);

  const submitButton = screen.getByRole('button', { name: /submit/i });
  const usernameInput = screen.getByLabelText(/username/i);
  const passwordInput = screen.getByLabelText(/password/i);

  expect(submitButton).toBeInTheDocument(); // Check if the button is in the DOM
  expect(submitButton).toHaveAttribute('type', 'submit'); // Check if the button has the correct type attribute

  expect(usernameInput).toBeInTheDocument(); // Check if the username input is in the DOM
  expect(usernameInput).toHaveAttribute('type', 'text'); // Check if the username input has the correct type attribute

  expect(passwordInput).toBeInTheDocument(); // Check if the password input is in the DOM
  expect(passwordInput).toHaveAttribute('type', 'password'); // Check if the password input has the correct type attribute
});

test('Form button click works correctly', () => {
  render(<Form />);

  const submitButton = screen.getByRole('button', { name: /submit/i });

  // Simulate a click on the submit button
  fireEvent.click(submitButton);

  // Write further tests here based on the expected behavior of the form submission
});
