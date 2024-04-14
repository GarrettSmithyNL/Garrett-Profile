/*
 * This is app screen that holds each of the apps
 */

import BitcoinTracker from "./BitcoinTracker";
import Hangman from "./Hangman";
import TaskTrackerApp from "./TaskTrackerApp";
import UnderConstruction from "./UnderConstruction";

// This component has default values for each of it props
const AppPage = ({
  hangman = false,
  tasktracker = false,
  bitcoin = false,
  construction = false,
}) => {
  return (
    /*
     * This page creates 4 div for each of the apps that is featured
     * to make the app apprear the script checks to see when prop is set
     * to true and displays that app
     */
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
