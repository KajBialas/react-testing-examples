import { renderHook, act } from '@testing-library/react-hooks';
import useCounter from './useCounter';

describe('useCounter', () => {
  it('should return correct init value', () => {
    const { result } = renderHook(() => useCounter())
    expect(result.current.count).toBe(0);
  });

  it('should return correct increment value', () => {
    const { result } = renderHook(() => useCounter())
    act(() => {
      result.current.increment()
    })
    expect(result.current.count).toBe(1)
  });
});
