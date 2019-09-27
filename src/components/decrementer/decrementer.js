import React, { useContext } from 'react';
import { CounterContext } from '../../context/counter-context';

export default function Decrementer() {
  const counterContext = useContext(CounterContext);

  return (
    <>
      <button style={counterContext.button} onClick={counterContext.decrement}> - </button>
    </>
  );
}
