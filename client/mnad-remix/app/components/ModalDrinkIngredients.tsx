import { getSentimentLabel, interpolateColor } from "~/util/helperfunctions";
import GradientText from "./GradientText";
import { sentimentLabelColorRange } from "~/util/constants";

const ModalDrinkIngredients: React.FC = () => {
  const averageSentimentScoreSuggested = 50;
  const abvValue = 30;
  const numIngredients = 5;

  return (
    <>
      <div className="w-[700px] font-semibold">
        <div className="text-label text-[1.6rem] h-[1.8rem]">Make Your Own</div>
        <div className="text-[2.5rem] h-[3.2rem]">Moscow Mule</div>
        <div className="text-label flex">
          <div>
            {abvValue}% ABV • {numIngredients} Ingredients • Suggested when
            sentiment is{" "}
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
