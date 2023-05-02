import React, { useState } from "react";

const WordleForm = ({ HandleGuessSubmit, gameStatus }) => {
  const [guess, setGuess] = useState("");
  // console.log(guess);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (guess.length !== 5) {
      alert("Please enter exactly 5 letters to submit");
      return;
    }

    // console.log({ guess });
    HandleGuessSubmit(guess);
    setGuess("");
    // console.log(event.target.value);
  };

  const handleInputChange = (value) => {
    // console.log(value);
    setGuess(value.toUpperCase());
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="guess-input-wrapper">
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          required
          disabled={gameStatus !== "running"}
          minLength={5}
          maxLength={5}
          pattern="[a-zA-Z]{5}"
          title="5 letter word"
          id="guess-input"
          type="text"
          value={guess}
          onChange={(e) => handleInputChange(e.target.value)}
        />
      </form>
    </>
  );
};

export default WordleForm;
