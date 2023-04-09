// import necessary react testing library helpers here
// import the Counter component here
import { fireEvent, render, screen } from '@testing-library/react';
import Counter from '../components/Counter';
import userEvent from '@testing-library/user-event';


beforeEach(() => {
  // Render the Counter component here
  render(<Counter/>); 
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const counterMessage = screen.getByText(/0/i);
  expect(counterMessage).toBeInTheDocument();
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const increaseButton = screen.getByText('+'); 
  userEvent.click(increaseButton); 
  const increaseCount = screen.getByText(/1/i);
  expect(increaseCount).toBeInTheDocument; 
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const decreaseButton = screen.getByText('-'); 
  userEvent.click(decreaseButton); 
  const decreaseCount = screen.getByText(/-1/i);
  expect(decreaseCount).toBeInTheDocument;
});
