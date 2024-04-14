// This is the main logic for the task tracker app

import { useState, useEffect } from "react";
import TaskHeader from "./TaskHeader";
import AddTask from "./AddTask";
import Tasks from "./Tasks";

function TaskTrackerApp() {
  // This is the list of tasks
  let [tasks, setTasks] = useState([]);

  // This is the updater for getting the tasks from the server
  useEffect(() => {
    // This is a async function that gets the tasks from the server and
    // updates state
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };

    getTasks();
  }, []);

  // This is the function used by the updater to get the
  // tasks from the server
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();
    return data;
  };

  // This is the function that get individual tasks
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();
    return data;
  };

  let [showAddTask, setShowAddTask] = useState(false);

  // this deletes the task from the list when the button is clicked
  let deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, { method: "DELETE" });
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // This is used to toggle the reminder on a task using a double click
  let toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder };
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updTask),
    });
    const data = await res.json();
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    );
  };

  // This is used to add tasks to the server
  let addTask = async (task) => {
    const res = await fetch(`http://localhost:5000/tasks`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(task),
    });

    const data = await res.json();
    setTasks([...tasks, data]);
  };

  // This is the main rendering of the task tracker app
  return (
    <div className="taskContainer">
      <TaskHeader
        title="Task Tracker"
        onAdd={() => {
          setShowAddTask(!showAddTask);
        }}
        showAdd={showAddTask}
      />
      <>
        {showAddTask && <AddTask onAdd={addTask} />}

        {tasks.length > 0 ? (
          <Tasks
            tasks={tasks}
            onDelete={deleteTask}
            onToggle={toggleReminder}
          />
        ) : (
          "No task to show"
        )}
      </>
    </div>
  );
}

export default TaskTrackerApp;
