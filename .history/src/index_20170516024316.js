import React from 'react';
import ReactDOM from 'react-dom';

class Layout extends React.Component {
  render() {
    return (
      <h1>It's Working!</h1>
    );
  }
}

ReactDOM.render(<Layout />, document.findElementById('root'));
