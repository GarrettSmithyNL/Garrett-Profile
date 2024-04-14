/*
 * This is the BigTiles that are displayed on the home page for each of the apps
 */

import Tile from "./Tile";
import gallows from "../photos/gallows.jpg";
import tasks from "../photos/tasks.jpg";
import bitcoin from "../photos/bitcoin.jpg";
import construction from "../photos/construction.jpg";

import { useNavigate } from "react-router";

const Tiles = () => {
  // Used to navigate around the page
  const navigation = useNavigate();

  return (
    <div className="tilesHolder">
      <div className="bigTilesHolder">
        {/* Each tile is passed its className the pictures, text,
            and a call back function that navigates to the appropriate page */}
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
