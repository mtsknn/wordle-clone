import React from 'react';
import { NUM_OF_GUESSES_ALLOWED, WORD_LENGTH } from '../../constants';
import { checkGuess } from '../../game-helpers';
import { range } from '../../utils';

function Guesses({ answer, guesses }) {
  return (
    <div className="guess-results">
      {range(0, NUM_OF_GUESSES_ALLOWED).map((i) => (
        <Guess answer={answer} key={i} word={guesses[i]} />
      ))}
    </div>
  );
}

export default Guesses;

function Guess({ answer, word }) {
  const statuses = word && checkGuess(word, answer);

  return (
    <p className="guess">
      {range(WORD_LENGTH).map((i) => (
        <span
          className={statuses ? `cell ${statuses[i].status}` : 'cell'}
          key={i}
        >
          {statuses?.[i].letter}
        </span>
      ))}
    </p>
  );
}
