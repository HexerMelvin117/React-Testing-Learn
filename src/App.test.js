import * as React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';



test('Renders needed content', () => {
  const { getByText, getByLabelText } = render(<App />)

  getByText("TODOs");
  getByLabelText("What needs to be done?");
  getByText("Add #1");
});

test("allows users to add items", () => {
  const { getByText, getByLabelText } = render(<App />)

  const input = getByLabelText("What needs to be done?")
  const button = getByText("Add #1")

  userEvent.type(input, "Learn german")
  userEvent.click(button)

  getByText("Learn german");
  getByText("Add #2")
})
