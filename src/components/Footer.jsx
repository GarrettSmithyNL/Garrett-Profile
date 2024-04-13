import { useNavigate } from "react-router";

import downArrows from "../photos/down.svg";

const Footer = () => {
  const navigation = useNavigate();

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
