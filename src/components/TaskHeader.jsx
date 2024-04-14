// This is the header for the task tracker it hold both the title
// and the button that opens the menu to add a task

import TaskButton from "./TaskButton";
import { useLocation } from "react-router-dom";

function TaskHeader({ title, onAdd, showAdd }) {
  const location = useLocation();

  return (
    <header>
      <h3>{title}</h3>
      {location.pathname === "/tasktracker" && (
        <TaskButton
          text={showAdd ? "Close" : "Add"}
          color={showAdd ? "red" : "blue"}
          onClick={onAdd}
        />
      )}
    </header>
  );
}

export default TaskHeader;
