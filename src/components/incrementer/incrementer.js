import React from 'react';
import { CounterContext } from "../counter/counter-context";

export default function Incrementer(){
  return(
    <CounterContext.Consumer>
      {context => (
        <>
          <button style={context.button} onClick={context.increment}> + </button>
        </>
      )}
    </CounterContext.Consumer>
  )
}
