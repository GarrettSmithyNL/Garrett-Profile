import Tile from "./Tile";
import gallows from "../photos/gallows.jpg";
import tasks from "../photos/tasks.jpg";
import bitcoin from "../photos/bitcoin.jpg";
import construction from "../photos/construction.jpg";

import { useNavigate } from "react-router";

const Tiles = () => {
  const navigation = useNavigate();

  return (
    <div className="tilesHolder">
      <div className="bigTilesHolder">
        <Tile
          className="bigTile"
          image={gallows}
          text={"Hangman Game"}
          onClick={() => navigation("/hangman", { replace: true })}
        />
        <Tile
          className="bigTile"
          image={tasks}
          text={"Task Tracker"}
          onClick={() => navigation("/tasktracker", { replace: true })}
        />
        <Tile
          className="bigTile"
          image={bitcoin}
          text={"Bitcoin Price Tracker"}
          onClick={() => navigation("/bitcoin", { replace: true })}
        />
        <Tile
          className="bigTile"
          image={construction}
          text={"Under Construction"}
          onClick={() => navigation("/construction", { replace: true })}
        />
      </div>
    </div>
  );
};

export default Tiles;
