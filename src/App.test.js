import React from 'react';
import { render, screen, fireEvent, act, waitFor } from '@testing-library/react';
import TodosList from './App';

const mockResponse = [{
  id: 1,
  title: 'Example 1',
}];


describe('TodoList.js', () => {
  beforeEach(() => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockResponse)
    })
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should display loader', async () => {
    render(<TodosList />);
    const todoLoader = screen.getAllByTestId('todosLoader');
    expect(todoLoader).toBeTruthy();
  });

  it('should display data', async () => {
    render(<TodosList />);
    await act(async () => Promise.resolve());
    const todoListNames = screen.getAllByTestId('todoListElement').map(div => div.textContent);
    const expectedResult = mockResponse.map(element => element.title);
    expect(expectedResult).toEqual(todoListNames);
  });

});