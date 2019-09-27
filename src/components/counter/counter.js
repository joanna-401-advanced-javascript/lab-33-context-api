import React from 'react';
import { CounterContext } from '../../context/counter-context';

class Counter extends React.Component {
  render() {
    return (
      <>
        <span style={this.context.counter}>{this.context.count}</span>
      </>
    );
  }
}

Counter.contextType = CounterContext;

export default Counter;
