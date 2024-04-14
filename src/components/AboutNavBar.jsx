/**
 * Renders the navigation bar for the About page.
 */
import { useNavigate } from "react-router";
import smallGallows from "../photos/smallGallows.jpg";
import smallTasks from "../photos/smallTasks.jpg";
import smallBitcoin from "../photos/smallBitcoin.jpg";
import smallConstruction from "../photos/smallConstruction.jpg";
import upArrows from "../photos/up.svg";
import SmallTiles from "../components/SmallTiles";

const AboutNavBar = () => {
  // Used to navigate to other pages
  const navigation = useNavigate();

  // Creates the arrays for the two SmallTiles, two sets of pictures,
  // two sets of texts, and two sets of call back functions that is used
  // to navigate the respective pages
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
    // Holds the navbar for the about page
    <div className="aboutNav">
      {/* Holds the SmallTiles to allow for styling */}
      <div className="smallTilesonBar">
        <SmallTiles
          images={images1}
          texts={texts1}
          clicks={click1}
        />
      </div>
      {/* This is a impromt to button to return to the home page */}
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
      {/* Holds the SmallTiles to allow for styling */}
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
