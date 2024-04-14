/**
 * Represents the About component, and creates the AboutDescript and ApoutPic
 */
import AboutDescript from "./AboutDescript";
import AboutPic from "./AboutPic";

const About = () => {
  return (
    <div className="aboutDescript">
      <AboutDescript />
      <AboutPic />
    </div>
  );
};

export default About;
