const LostMessage = ({ word }) => {
  return (
    <div className="lostMessage">
      <p>You Lost the game and it will reset in 5 seconds!</p>
      <p>The word was {word}</p>
    </div>
  );
};

export default LostMessage;
