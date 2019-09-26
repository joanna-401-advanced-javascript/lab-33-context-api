import React from 'react';
import Counter from './components/counter/counter';
import Incrementer from './components/incrementer/incrementer';
import Decrementer from './components/decrementer/decrementer';
import { CounterContext } from './components/counter/counter-context';

export default class App extends React.Component {
  render() {
    return (
      <>
        <div style={this.context.container}>
          <Decrementer />
          <Counter />
          <Incrementer />
        </div>
      </>
    );
  }
}

Counter.contextType = CounterContext;
