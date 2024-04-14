import BitcoinTracker from "./BitcoinTracker";
import Hangman from "./Hangman";
import TaskTrackerApp from "./TaskTrackerApp";
import UnderConstruction from "./UnderConstruction";

const AppPage = ({
  hangman = false,
  tasktracker = false,
  bitcoin = false,
  construction = false,
}) => {
  return (
    <div className="appHolder">
      <div className="appFrame">
        <div>{hangman ? <Hangman /> : <></>}</div>
        <div>{tasktracker ? <TaskTrackerApp /> : <></>}</div>
        <div>{bitcoin ? <BitcoinTracker /> : <></>}</div>
        <div>{construction ? <UnderConstruction /> : <></>}</div>
      </div>
    </div>
  );
};

export default AppPage;
