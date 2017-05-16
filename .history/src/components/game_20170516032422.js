//This is the high level component
import React from 'react';
//guess is the user input
import Guess from './guess';
//response is the aggregate answers
import Response from './response'

export default function Game {

  render() {
    return (
      <div>
        <Guess />
        <Response />
      </div>
    );
  }
};