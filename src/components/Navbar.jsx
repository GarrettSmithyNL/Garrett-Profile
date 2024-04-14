// This is the navbar for the home page that uses the link component

import Links from "./Links";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContent">
        <h1 className="titleName">Garrett Smith - Software Developer</h1>
        <Links
          className="links"
          home={false}
        />
      </div>
    </div>
  );
};

export default Navbar;
