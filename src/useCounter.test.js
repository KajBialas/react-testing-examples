import { renderHook, act } from '@testing-library/react-hooks';
import useCounter from './useCounter';

describe('useCounter', () => {
  it('should return correct init value', () => {
    const { result } = renderHook(() => useCounter())
    expect(result.current.count).toBe(0);
  });


});
