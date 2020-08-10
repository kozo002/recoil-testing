import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import { counterState, checkCountIfLowerThanTen } from './recoil-state/counter';

export default function Counter() {
  const [count, setCount] = useRecoilState(counterState);
  const isCountLowerThanTen = useRecoilValue(checkCountIfLowerThanTen);

  return (
    <div>
      Count: {count}
      <br />
      <button onClick={() => setCount(count + 1)}>
        increment
      </button>
      <div>
        Count is {isCountLowerThanTen ? 'lower than' : 'higher or equals'} ten.
      </div>
    </div>
  );
}
