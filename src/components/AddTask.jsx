/*
 * Create the AddTask form to the task tracker, This was also made in class
 */
import { useState } from "react";

const AddTask = ({ onAdd }) => {
  // useState hooks for each of the nessacery variable
  let [text, setText] = useState("");
  let [day, setDay] = useState("");
  let [reminder, setReminder] = useState(false);

  // This is what happenes when you click the submit button
  let onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert("Please Add a Task");
    }
    onAdd({ text, day, reminder });
    setText("");
    setDay("");
    setReminder(false);
  };

  return (
    <form
      className="add-form"
      onSubmit={onSubmit}
    >
      <div className="form-control">
        <label>Task </label>
        <input
          type="text"
          placeholder="Add Task"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
      </div>

      <div className="form-control">
        <label>Day & Time </label>
        <input
          type="text"
          placeholder="Add Day & Time"
          onChange={(e) => setDay(e.target.value)}
          value={day}
        />
      </div>

      <div className="form-control-check">
        <label>Set Reminder</label>
        <input
          type="checkbox"
          onChange={(e) => setReminder(e.currentTarget.checked)}
          value={reminder}
          checked={reminder}
        />
      </div>

      <input
        type="submit"
        value="Save Task"
        className="btn"
      />
    </form>
  );
};

export default AddTask;
