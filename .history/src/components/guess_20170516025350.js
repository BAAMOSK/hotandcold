import React from 'react';
import './guess.css';

export default class Guess(props) extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      props: '';
    }
}

  return (
    <div>
      <form>
        <input type="textarea" placeholder="guess a number..." />
      </form>
  )
}