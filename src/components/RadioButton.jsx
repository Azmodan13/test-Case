



import React from 'react';

function RadioButton({ register, stap, text }) {
  return (
    <label>
      <input
        {...register(stap)}
        type="radio"
        value={text}
        name={stap}
      />
      {text}
    </label>
  );
}

export default RadioButton;
