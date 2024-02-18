import { getSentimentLabel, interpolateColor } from "~/util/helperfunctions";
import GradientText from "./GradientText";
import { sentimentLabelColorRange } from "~/util/constants";

const ModalDrinkIngredients: React.FC = () => {
  const averageSentimentScoreSuggested = 50;
  const abvValue = 30;
  const numIngredients = 5;

  return (
    <>
      <div className="w-[75vw] md:w-[50vw] font-semibold overflow-hidden">
        <div className="text-label text-label-sm h-[1.2rem] md:text-[1.2rem] md:h-[1.4rem] lg:text-[1.6rem] lg:h-[1.8rem]">
          Make Your Own
        </div>
        <div className="text-[1.6rem] h-[2rem] lg:text-[2.5rem] lg:h-[3.2rem] my-auto">
          Moscow Mule
        </div>
        <div className="text-label text-[.9rem] h-[1rem] lg:text-[1rem] flex items-center text-center">
          <div>
            {numIngredients} Ingredients • Suggested when{" "}
            <GradientText
              color1={interpolateColor(averageSentimentScoreSuggested)}
              color2={interpolateColor(averageSentimentScoreSuggested)}
            >
              {getSentimentLabel(averageSentimentScoreSuggested)}
            </GradientText>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalDrinkIngredients;
