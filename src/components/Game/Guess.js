import React from "react";
import { checkGuess } from "../../game-helpers";

const Guess = ({ guess, answer }) => {
  return (
    <p className="guess">
      {checkGuess(guess, answer).map(({ letter, status }) => (
        <span key={letter} class={`cell ${status}`}>
          {letter}
        </span>
      ))}
    </p>
  );
};

export default Guess;
