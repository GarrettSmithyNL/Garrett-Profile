// This is the small tiles on the navbar in the about page

import Tile from "../components/Tile";

const SmallTiles = ({ images, texts, clicks }) => {
  return (
    <div className="smallTileHolder">
      <Tile
        className="smallTile"
        image={images[0]}
        text={texts[0]}
        onClick={clicks[0]}
      />
      <Tile
        className="smallTile"
        image={images[1]}
        text={texts[1]}
        onClick={clicks[1]}
      />
    </div>
  );
};

export default SmallTiles;
