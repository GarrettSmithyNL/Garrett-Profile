const Keyborad = ({ alphabet, onClick }) => {
  const arr = alphabet;
  return (
    <div className="keyboardHolder">
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
