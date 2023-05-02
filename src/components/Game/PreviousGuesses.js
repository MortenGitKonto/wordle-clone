import React from "react";
import Guess from "./Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";

// console.log(NUM_OF_GUESSES_ALLOWED);
// console.log(range(0, 5));

const PreviousGuesses = ({ allGuesses, answer }) => {
  const numOfGuessesLeft = NUM_OF_GUESSES_ALLOWED - allGuesses.slice(-6).length;
  // console.log(answer);
  return (
    <>
      <div className="guess-results">
        {allGuesses.slice(-6).map((guess) => (
          <Guess key={guess} guess={guess} answer={answer} />
        ))}
        {range(0, numOfGuessesLeft).map((i) => (
          <p key={i} className="guess">
            {range(0, 5).map((letter) => (
              <span key={letter} class="cell">
                {""}
              </span>
            ))}
          </p>
        ))}
      </div>
    </>
  );
};

export default PreviousGuesses;
