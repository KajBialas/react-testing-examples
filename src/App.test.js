import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './App';

describe('Counter.js', () => {
  it('should correct render init value', () => {
    render(<Counter />);
    const scoreElement = screen.getByTestId('counterScore');
    expect(scoreElement).toHaveTextContent('0');
  });

  it('should correct render value after click button', () => {
    render(<Counter />);
    const scoreElement = screen.getByTestId('counterScore');
    const buttonElement = screen.getByTestId('counterIncrementButton');

    fireEvent.click(buttonElement);

    expect(scoreElement).toHaveTextContent('1');
  });
})