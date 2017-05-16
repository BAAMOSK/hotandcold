import React from 'react';

const guess = 'Users guess here...'
export default function Guess(props) {
  return (
    <div>
      <input type="textarea" placeholder={guess}/>
      <br />
      <button>Guess</button>
    </div>
  );
};