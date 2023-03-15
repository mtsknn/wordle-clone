import React from 'react';

function Banner({ children, restart, type }) {
  return (
    <div className={`${type} banner`}>
      {children}
      <button onClick={restart}>New game</button>
    </div>
  );
}

export default Banner;
