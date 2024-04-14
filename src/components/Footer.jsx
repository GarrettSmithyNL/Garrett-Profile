/*
 * This is the footer bar at the bottom of the home page that links to the about page
 */

import { useNavigate } from "react-router";
import downArrows from "../photos/down.svg";

const Footer = () => {
  // Used to navigate around the page
  const navigation = useNavigate();

  // This is used to move to the about page if you click the bar
  const goAbout = () => {
    navigation("/about", { replace: true });
  };

  return (
    <div
      className="footer"
      onClick={goAbout}
    >
      <h1 className="footerText">About Me</h1>
      <img
        src={downArrows}
        alt="Arrows"
      />
    </div>
  );
};

export default Footer;
