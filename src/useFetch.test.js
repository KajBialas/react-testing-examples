import { renderHook, act } from '@testing-library/react-hooks';

import {useFetch} from './useFetch';
import useCounter from './useCounter';

const mockResponse = [{
  id: 1,
  title: 'Example 1',
}];

describe('1', () => {
  beforeEach(() => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockResponse)
    })
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });


  it('should return correct increment value', () => {
    const { result } = renderHook(() => useFetch('https://jsonplaceholder.typicode.com/todos'));
    expect(result.current.loading).toBe(true);
  });

  it('should return correct increment2 value', async () => {
    const { result } = renderHook(() => useFetch('https://jsonplaceholder.typicode.com/todos'));
    await act(async () => Promise.resolve());
    expect(result.current.data).toBe(mockResponse);
  });



  describe('2', () => {
    beforeEach(() => {
      jest.spyOn(global, 'fetch').mockRejectedValue({});
    });

    afterEach(() => {
      jest.restoreAllMocks();
    });


    it('should return correct increment4 value', async () => {

      const { result } = renderHook(() => useFetch('https://jsonplaceholder.typicode.com/todos'));
      await act(async () => Promise.resolve());
      expect(result.current.error).toBe(true);
    });
  });
});