import React, { useState } from 'react';

function Counter() {
  const [ counter, setCounter ] = useState(0);

  const incrementCounter = () => setCounter(counter + 1);

  return (
    <div>
      <div data-testid="counterScore">
        {counter}
      </div>
      <button data-testid="counterIncrementButton" onClick={incrementCounter}>INCREMENT</button>
    </div>
  );
}

export default Counter;
