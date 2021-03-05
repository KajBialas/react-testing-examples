import Button from './Button';
import { render, screen, fireEvent } from '@testing-library/react';

const mockHandleClick = jest.fn();


test('1', () => {
  render(<Button text="example" handleClick={mockHandleClick}/>);
  const buttonElement = screen.getByTestId('button');

  fireEvent.click(buttonElement)

  expect(mockHandleClick).toHaveBeenCalled();
})