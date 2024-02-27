import { getSentimentLabel, interpolateColor } from "~/util/helperfunctions";
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
      <div className="max-w-[75vw] md:max-w-[50vw] font-semibold overflow-hidden">
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

        <div className="overflow-y-auto max-h-[35vh] font-normal">
          <ul className="ml-4 mt-[20px]">
            {drinkDetails.ingredients.map((ingredient, index) => (
              <li key={index}>
                <IngredientItem ingredient={ingredient} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ModalDrinkIngredients;
