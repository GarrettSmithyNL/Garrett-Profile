const Tile = ({ image, text }) => {
  return (
    <div className="tile">
      <img
        src={image}
        alt={text}
      />
      <div className="bottom-right">{text}</div>
    </div>
  );
};

export default Tile;
