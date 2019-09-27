import React from 'react';
import Counter from './components/counter/counter';
import Incrementer from './components/incrementer/incrementer';
import Decrementer from './components/decrementer/decrementer';
import { CounterContext } from './context/counter-context';

import './stylesheets/app.scss';

export default class App extends React.Component {
  render() {
    return (
      <CounterContext.Consumer>
        {(context) => (
          <>
            <div style={context.container} className='wrapper'>
              <Decrementer />
              <Counter />
              <Incrementer />
            </div>
          </>
        )}
      </CounterContext.Consumer>
    );
  }
}
