import { useNavigate } from "react-router";

import smallGallows from "../photos/smallGallows.jpg";
import smallTasks from "../photos/smallTasks.jpg";
import smallBitcoin from "../photos/smallBitcoin.jpg";
import smallConstruction from "../photos/smallConstruction.jpg";
import upArrows from "../photos/up.svg";

import SmallTiles from "../components/SmallTiles";

const AboutNavBar = () => {
  const navigation = useNavigate();
  const images1 = [smallGallows, smallTasks];
  const images2 = [smallBitcoin, smallConstruction];
  const texts1 = ["Hangman Game", "Task Tracker"];
  const texts2 = ["Bitcoin Price Tracker", "Under Construction"];
  const click1 = [
    () => {
      navigation("/hangman", { replace: true });
    },
    () => {
      navigation("/tasktracker", { replace: true });
    },
  ];
  const click2 = [
    () => {
      navigation("/bitcoin", { replace: true });
    },
    () => {
      navigation("/construction", { replace: true });
    },
  ];

  return (
    <div className="aboutNav">
      <div className="smallTilesonBar">
        <SmallTiles
          images={images1}
          texts={texts1}
          clicks={click1}
        />
      </div>
      <div
        className="homeArrows"
        onClick={() => navigation("/", { replace: true })}
      >
        <img
          src={upArrows}
          alt="Arrows"
        />
        <h1 className="aboutNavText">Home</h1>
      </div>
      <div className="smallTilesonBar">
        <SmallTiles
          images={images2}
          texts={texts2}
          clicks={click2}
        />
      </div>
    </div>
  );
};

export default AboutNavBar;
