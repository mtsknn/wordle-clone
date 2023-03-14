import React from 'react';

function Guesses({ guesses }) {
  return (
    <div className="guess-results">
      {guesses.map((guess, i) => (
        <p className="guess" key={i}>
          {guess}
        </p>
      ))}
    </div>
  );
}

export default Guesses;
