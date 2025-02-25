/**
 * Component that displays the profile picture and name of Garrett Smith.
 */
import Links from "./Links";
import profilePic from "../photos/profilePic.jpg";

const AboutPic = () => {
  return (
    <div className="aboutPicHolder">
      <h1>Garrett Smith</h1>
      <img
        src={profilePic}
        alt="Profile Picture"
      />
      <Links home={false} />
    </div>
  );
};

export default AboutPic;
