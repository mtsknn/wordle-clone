import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';

function Guesses({ guesses }) {
  return (
    <div className="guess-results">
      {range(0, NUM_OF_GUESSES_ALLOWED).map((i) => (
        <Guess key={i} word={guesses[i] || ''} />
      ))}
    </div>
  );
}

export default Guesses;

function Guess({ word }) {
  return (
    <p className="guess">
      {range(0, 5).map((i) => (
        <span className="cell" key={i}>
          {word[i]}
        </span>
      ))}
    </p>
  );
}
