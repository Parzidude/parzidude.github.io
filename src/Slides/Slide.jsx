import InteractiveImages from "../Components/InteractiveImages";
import data from "../assets/Year1 - Copy.json";

const Slide = () => {
  return (
    <div>
      <InteractiveImages data={data} />
    </div>
  );
};

export default Slide;
