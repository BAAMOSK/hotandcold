import React from 'react';
import ReactDOM from 'react-dom';
import Game from './components/game';

class Layout extends React.Component {
  render() {
    return (
      <h1>It's Working!</h1>
    );
  }
}

ReactDOM.render(<Layout />, document.getElementById('root'));
