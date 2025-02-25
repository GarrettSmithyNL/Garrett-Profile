// This is the base tile that is used in the SmallTile and the BigTile

const Tile = ({ className, image, text, onClick }) => {
  return (
    <div
      className={className}
      onClick={onClick}
    >
      <img
        src={image}
        alt={text}
      />
      <div className="bottom-right">{text}</div>
    </div>
  );
};

export default Tile;
