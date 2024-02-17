import { getSentimentLabel, interpolateColor } from "~/util/helperfunctions";
import GradientText from "./GradientText";
import { sentimentLabelColorRange } from "~/util/constants";

const ModalDrinkIngredients: React.FC = () => {
  const averageSentimentScoreSuggested = 50;
  const abvValue = 30;
  const numIngredients = 5;

  return (
    <>
      <div className="w-[75vw] md:w-[20vw] font-semibold overflow-hidden">
        <div className="text-label text-label-sm h-[1.2rem]">Make Your Own</div>
        <div className="text-[1.6rem] h-[2rem] md:text-[2.5rem] md:h-[3.2rem] my-auto">
          Moscow Mule
        </div>
        <div className="text-label text-[.75rem]">
          <div>
            {abvValue}% ABV • {numIngredients} Ingredients • Suggested when{" "}
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
