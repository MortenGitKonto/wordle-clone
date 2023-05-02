import React from "react";

const GameStatusBanner = ({ gameStatus, nrOfGuesses, answer }) => {
  if (gameStatus === "won") {
    return (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong>
            {" "}
            {nrOfGuesses} {nrOfGuesses === 1 ? "guess" : "guesses"}
          </strong>
          .
        </p>
      </div>
    );
  } else if (gameStatus === "lost") {
    return (
      <div class="sad banner">
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      </div>
    );
  }
};
export default GameStatusBanner;
