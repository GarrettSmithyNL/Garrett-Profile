import constructionPic from "../photos/underConstruction.jpg";

const UnderConstruction = () => {
  return (
    <div className="construction">
      <img
        src={constructionPic}
        alt="Under Construction"
      />
      <h3>Sorry, this is under construction!</h3>
    </div>
  );
};

export default UnderConstruction;
