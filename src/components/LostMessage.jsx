// This is the losing message at the end of the hangman game
// it also tells you the word you have wrong

const LostMessage = ({ word }) => {
  return (
    <div className="lostMessage">
      <p>You Lost the game and it will reset in 5 seconds!</p>
      <p>The word was {word}</p>
    </div>
  );
};

export default LostMessage;
