import { FaGithub, FaLinkedin } from "react-icons/fa6";

const Links = () => {
  return (
    <div className="links">
      <a
        href="https://www.linkedin.com/in/garrettsmithynl/"
        target="_blank"
        className="clickableLink"
      >
        <FaLinkedin size={48} />
      </a>
      <a
        href="https://github.com/GarrettSmithyNL"
        target="_blank"
        className="clickableLink"
      >
        <FaGithub size={48} />
      </a>
    </div>
  );
};

export default Links;
