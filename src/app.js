import React from 'react';
import Counter from './components/counter/counter';
import Incrementer from './components/incrementer/incrementer';
import Decrementer from './components/decrementer/decrementer';
import { CounterContext } from './components/counter/counter-context';

import './stylesheets/app.scss';

export default class App extends React.Component {
  render() {
    return (
      <>
        <div style={this.context.container} className='wrapper'>
          <Decrementer />
          <Counter />
          <Incrementer />
        </div>
      </>
    );
  }
}

Counter.contextType = CounterContext;
