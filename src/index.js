import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';
import Context from './context/counter-context';

class Main extends React.Component {
  render() {
    return (
      <Context>
        <App />
      </Context>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);
