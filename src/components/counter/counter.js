import React from 'react';
import { CounterContext } from "./counter-context";

class Counter extends React.Component {

  render(){
    console.log(this.context);
    return (
      <>
        <span style={this.context.counter}>{this.context.count}</span>
      </>
    );
  }
}

Counter.contextType = CounterContext;

export default Counter;
