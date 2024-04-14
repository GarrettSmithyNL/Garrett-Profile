/*
 * This is the link in the nav bar and under the user picture, takes a prop that
 * is a check to see if the home button is need which it is not on the home page
 */

import { FaGithub, FaLinkedin, FaHouse } from "react-icons/fa6";
import { useNavigate } from "react-router";

const Links = ({ home }) => {
  // Used to navigate around the page
  const navigation = useNavigate();

  return (
    // This is the icons and links below, this is also where
    // the check for the home button is
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
      {home ? (
        <FaHouse
          size={48}
          onClick={() => navigation("/", { replace: true })}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Links;
