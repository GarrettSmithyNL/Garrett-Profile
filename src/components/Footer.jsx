import arrows from "../photos/down.svg";

const Footer = () => {
  return (
    <div className="footer">
      <h1 className="footerText">About Me</h1>
      <img
        src={arrows}
        alt="Arrows"
      />
    </div>
  );
};

export default Footer;
