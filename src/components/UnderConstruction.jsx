// This is the app for the under construction page it just renders the image and a couple of messages

import constructionPic from "../photos/underConstruction.jpg";

const UnderConstruction = () => {
  return (
    <div className="construction">
      <img
        src={constructionPic}
        alt="Under Construction"
      />
      <h3>Sorry, this is under construction!</h3>
      <h3>More to come soon!</h3>
    </div>
  );
};

export default UnderConstruction;
