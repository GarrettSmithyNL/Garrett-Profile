// This button component that is use in multiple place in the task tracker

const TaskButton = ({ text, color, onClick }) => {
  return (
    <button
      className="btn"
      style={{ backgroundColor: color }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default TaskButton;
