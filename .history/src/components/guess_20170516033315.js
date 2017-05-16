import React from 'react';

const guess = 'This is where the user will input value'
export default function Guess(props) {
  return (
    <div>
      <input type="textarea" placeholder={guess}/>
      <button>Guess</button>
    </div>
  );
};