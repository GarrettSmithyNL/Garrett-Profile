/*
 * This is the navbar for the app screens
 */
import Links from "./Links";

const AppNav = () => {
  return (
    //This is the navbar holder that sets the size and makes the background color
    <div className="navbar">
      {/* This is a flex box that holds each element neatly */}
      <div className="navContent">
        <h1 className="titleName">Garrett Smith - Software Developer</h1>
        <Links
          className="links"
          home={true}
        />
      </div>
    </div>
  );
};

export default AppNav;
