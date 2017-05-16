import React from 'react';
import './guess.css';

export default function Guess(props) {
  return (
    <div>
      <form>
        <input type="textarea" placeholder="guess a number..." />
      </form>
  )
}