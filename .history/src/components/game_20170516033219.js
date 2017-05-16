//This is the high level component
import React from 'react';
//guess is the user input
import Guess from './guess';
//response is the aggregate answers
import Response from './response';
import './game.css';

export default function Game() {
  return (
    <div className="game">
      <Guess />
      <Response />
    </div>
  );
}