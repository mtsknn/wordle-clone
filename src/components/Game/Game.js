import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import Input from '../Input/Input';
import Guesses from '../Guesses/Guesses';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import Banner from '../Banner/Banner';
import Keyboard from '../Keyboard/Keyboard';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);
  const addGuess = (newGuess) => setGuesses((prev) => prev.concat(newGuess));

  const won = guesses.includes(answer);
  const lost = !won && guesses.length === NUM_OF_GUESSES_ALLOWED;

  return (
    <>
      <Guesses answer={answer} guesses={guesses} />
      <Input addGuess={addGuess} disabled={won || lost} />
      <Keyboard answer={answer} guesses={guesses} />
      {won && (
        <Banner type="happy">
          <p>
            <strong>Congratulations!</strong> Got it in{' '}
            <strong>
              {guesses.length} guess{guesses.length > 1 ? 'es' : ''}
            </strong>
            .
          </p>
        </Banner>
      )}
      {lost && (
        <Banner type="sad">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </Banner>
      )}
    </>
  );
}

export default Game;
