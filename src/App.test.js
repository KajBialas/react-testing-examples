import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import TodosList from './App';

const mockResponse = [{
  id: 1,
  title: 'Example 1',
}];

beforeAll(() => jest.spyOn(window, 'fetch'))

describe('TodoList.js', () => {
  beforeEach(() => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockResponse)
    })
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should working for example response', async () => {
    await act(async () => {
      render(<TodosList />);
    });

    const todoListNames = screen.getAllByTestId('todoListElement').map(div => div.textContent);
    const expectedResult = mockResponse.map(element => element.title);

    expect(expectedResult).toEqual(todoListNames);
  });
});