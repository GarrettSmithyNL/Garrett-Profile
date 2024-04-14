// This is the where the word is made into the "blanks" for the
// Hangman game

const WordGuess = ({ word }) => {
  const arr = word;
  return (
    <div className="wordHolder">
      {arr.map((index) => (
        <div
          className="guessLetter"
          id={index}
        >
          _
        </div>
      ))}
    </div>
  );
};

export default WordGuess;
