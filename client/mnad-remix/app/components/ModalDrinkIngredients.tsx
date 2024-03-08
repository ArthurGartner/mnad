import {
  capitalizeFirstLetter,
  getSentimentLabel,
  interpolateColor,
} from "~/util/helperfunctions";
import GradientText from "./GradientText";
import { sentimentLabelColorRange } from "~/util/constants";
import { DrinkDetails } from "~/util/types";
import IngredientItem from "./Ingredient";
import SectionHeader from "./SectionHeader";

interface ModalDrinkIngredientsProps {
  drinkDetails: DrinkDetails;
}

const ModalDrinkIngredients: React.FC<ModalDrinkIngredientsProps> = ({
  drinkDetails,
}) => {
  const averageSentimentScoreSuggested = 50;

  return (
    <>
      <div className="font-semibold overflow-hidden">
        <SectionHeader
          label="Make Your Own"
          title={drinkDetails.strDrink}
          subtitle={
            <div>
              {drinkDetails.ingredients.length} Ingredients • Suggested when{" "}
              <GradientText
                color1={interpolateColor(averageSentimentScoreSuggested)}
                color2={interpolateColor(averageSentimentScoreSuggested)}
              >
                {getSentimentLabel(averageSentimentScoreSuggested)}
              </GradientText>
            </div>
          }
        />

        <div className="overflow-y-auto max-h-[35vh] font-normal space-y-3">
          <ul className="ml-4 mt-[20px]">
            {drinkDetails.ingredients.map((ingredient, index) => (
              <li key={index}>
                <IngredientItem ingredient={ingredient} />
              </li>
            ))}
          </ul>
          <div className="text-center font-semibold">
            Serve in a{" "}
            <span className="text-blue-500">
              {capitalizeFirstLetter(drinkDetails.strGlass)}
            </span>{" "}
            and enjoy!
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalDrinkIngredients;
