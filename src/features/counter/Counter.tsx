import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from './counterSlice';


export function Counter() {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <div className='flex justify-evenly items-center'>
        <button
          className='bg-yellow-300 w-12 rounded-md my-4 font-bold'
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className='rounded-md font-bold text-6xl'>{count}</span>
        <button
          className='bg-yellow-300 w-12 rounded-md my-4 font-bold'
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      <div className='flex flex-col items-center justify-center'>
        <input
          className='bg-green-200 p-2'
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <div className='p-2'>
          <button
          className='bg-yellow-300 w-28  h-10 mx-4 rounded-md my-4 font-bold'
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Add Amount
        </button>
        <button
          className='bg-yellow-300 w-28 h-10  mx-4 rounded-md my-4 font-bold'
          onClick={() => dispatch(incrementAsync(incrementValue))}
        >
          Add Async
        </button>
        <button
          className='bg-yellow-300 h-10 mx-4 w-28 rounded-md my-4 font-bold'
          onClick={() => dispatch(incrementIfOdd(incrementValue))}
        >
          Add If Odd
        </button>
        </div>
      </div>
    </div>
  );
}
