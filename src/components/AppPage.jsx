const AppPage = ({
  hangman = false,
  tasktracker = false,
  bitcoin = false,
  construction = false,
}) => {
  return (
    <div className="appHolder">
      <div className="appFrame">
        <div>{hangman ? <p>Hangman</p> : <></>}</div>
        <div>{tasktracker ? <p>tasktracker</p> : <></>}</div>
        <div>{bitcoin ? <p>bitcoin</p> : <></>}</div>
        <div>{construction ? <p>construction</p> : <></>}</div>
      </div>
    </div>
  );
};

export default AppPage;
