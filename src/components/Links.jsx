import { FaGithub, FaLinkedin, FaHouse } from "react-icons/fa6";
import { useNavigate } from "react-router";

const Links = ({ home }) => {
  const navigation = useNavigate();

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
