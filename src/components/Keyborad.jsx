const Keyborad = ({ alphabet, onClick }) => {
  // Takes the prop and makes sure its an array to use
  const arr = alphabet;
  return (
    <div className="keyboardHolder">
      {/* Maps the letters of the alphabet to buttons that are clickable */}
      {arr.map((char) => (
        <button
          className="keyboardButton"
          onClick={() => onClick(char)}
          id={`btn${char}`}
          s
        >
          {char}
        </button>
      ))}
    </div>
  );
};

export default Keyborad;
