import React, { useState } from 'react';
import { WORD_LENGTH } from '../../constants';

function Input({ addGuess, disabled }) {
  const [text, setText] = useState('');

  /** @param {React.ChangeEvent<HTMLInputElement>} e */
  const onChange = (e) => {
    setText(
      e.target.value
        .replace(/[^a-z]/gi, '')
        .substring(0, WORD_LENGTH)
        .toUpperCase()
    );
  };

  /** @param {React.FormEvent<HTMLFormElement>} e */
  const onSubmit = (e) => {
    e.preventDefault();
    addGuess(text);
    setText('');
  };

  return (
    <form className="guess-input-wrapper" onSubmit={onSubmit}>
      <label>
        Enter guess:
        <input
          disabled={disabled}
          onChange={onChange}
          pattern={`[a-zA-Z]{${WORD_LENGTH}}`}
          required
          title={`${WORD_LENGTH} letters (A-Z)`}
          type="text"
          value={text}
        />
      </label>
    </form>
  );
}

export default Input;
