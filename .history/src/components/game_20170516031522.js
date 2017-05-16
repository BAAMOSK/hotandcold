//This is the high level component
import React from 'react';
//guess is the user input
import Guess from './guess';
import Response from './response'

export default class Game extends React.Component {
  constructor(props);
  super(props);

  render() {
    return (
      <div>
        <Guess />
        <Response />
      </div>
    );
  }
}