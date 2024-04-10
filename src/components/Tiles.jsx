import Tile from "./Tile";
import gallows from "../photos/gallows.jpg";
import tasks from "../photos/tasks.jpg";
import bitcoin from "../photos/bitcoin.jpg";
import construction from "../photos/construction.jpg";

const Tiles = () => {
  const gallowText = `Hangman\nGame`;

  return (
    <div className="tilesHolder">
      <div className="tiles">
        <Tile
          image={gallows}
          text={gallowText}
        />
        <Tile
          image={tasks}
          text={"Task Tracker"}
        />
        <Tile
          image={bitcoin}
          text={"Bitcoin Price Tracker"}
        />
        <Tile
          image={construction}
          text={"Under Construction"}
        />
      </div>
    </div>
  );
};

export default Tiles;
