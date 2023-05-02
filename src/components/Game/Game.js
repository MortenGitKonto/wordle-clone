import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import WordleForm from "./WordleForm";
import PreviousGuesses from "./PreviousGuesses";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import GameStatusBanner from "./GameStatusBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [gameStatus, setGameStatus] = useState("running");
  const [allGuesses, setAllGuesses] = useState([]);

  const HandleGuessSubmit = (guess) => {
    const nextGuesses = [...allGuesses, guess];
    setAllGuesses(nextGuesses);

    if (guess.toUpperCase() === answer) {
      setGameStatus("won");
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
  };

  const nrOfGuesses = allGuesses.length;

  return (
    <>
      <PreviousGuesses allGuesses={allGuesses} answer={answer} />
      <WordleForm
        HandleGuessSubmit={HandleGuessSubmit}
        gameStatus={gameStatus}
      />
      {gameStatus !== "running" && (
        <GameStatusBanner
          gameStatus={gameStatus}
          nrOfGuesses={nrOfGuesses}
          answer={answer}
        />
      )}
    </>
  );
}

export default Game;
