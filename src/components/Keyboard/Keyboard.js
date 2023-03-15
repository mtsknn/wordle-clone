import React from 'react';
import { checkLetter } from '../../game-helpers';

const letterRows = [
  'QWERTYUIOP'.split(''),
  'ASDFGHJKL'.split(''),
  'ZXCVBNM'.split(''),
];

function Keyboard({ answer, guesses }) {
  return (
    <div aria-hidden className="keyboard">
      {letterRows.map((letters, i) => (
        <div className="row" key={i}>
          {letters.map((letter, j) => {
            const status = checkLetter(letter, answer, guesses);
            return (
              <div className={`${status} key`} key={j}>
                {letter}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
