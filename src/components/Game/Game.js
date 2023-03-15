import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import Input from '../Input/Input';
import Guesses from '../Guesses/Guesses';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import Banner from '../Banner/Banner';
import Keyboard from '../Keyboard/Keyboard';

function Game() {
  const [answer, setAnswer] = useState(() => sample(WORDS));

  const [guesses, setGuesses] = useState([]);
  const addGuess = (newGuess) => setGuesses((prev) => prev.concat(newGuess));

  const restart = () => {
    setAnswer((prev) => sample(WORDS.filter((word) => word !== prev)));
    setGuesses([]);
  };

  const won = guesses.includes(answer);
  const lost = !won && guesses.length === NUM_OF_GUESSES_ALLOWED;

  return (
    <>
      <Guesses answer={answer} guesses={guesses} />
      <Input addGuess={addGuess} disabled={won || lost} />
      <Keyboard answer={answer} guesses={guesses} />
      {won && (
        <Banner restart={restart} type="happy">
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
        <Banner restart={restart} type="sad">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </Banner>
      )}
    </>
  );
}

export default Game;
