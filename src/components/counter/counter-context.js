import React from 'react';

export const CounterContext = React.createContext();

class CounterProvider extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0,
      increment: this.increment,
      decrement: this.decrement,
      container: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '40%',
      },
      counter: {
        display: 'inline-block',
        fontSize: '1em',
        border: '2px solid #444',
        borderRadius: '50%',
        lineHeight: '5em',
        textAlign: 'center',
        width: '5em',
      },
      button: {
        height: '3em',
      },
    };
  }

  increment = () => {
    this.setState((previousState) => {
      return {count: previousState.count + 1};
    });
  };

  decrement = () => {
    this.setState((previousState) => {
      return {count: previousState.count - 1};
    });
  };

  render() {
    return (
      <CounterContext.Provider value={this.state}>
        {this.props.children}
      </CounterContext.Provider>
    );
  }
}

export default CounterProvider;