import Links from "./Links";

const AppNav = () => {
  return (
    <div className="navbar">
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
