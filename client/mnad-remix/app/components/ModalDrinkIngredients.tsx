import { getSentimentLabel, interpolateColor } from "~/util/helperfunctions";
import GradientText from "./GradientText";
import { sentimentLabelColorRange } from "~/util/constants";
import { DrinkDetails } from "~/util/types";
import IngredientItem from "./Ingredient";

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
        <div className="text-label text-label-sm h-[1.2rem] md:text-[1.2rem] md:h-[1.4rem] lg:text-[1.6rem] lg:h-[1.8rem]">
          Make Your Own
        </div>
        <div className="text-[1.6rem] h-[2rem] lg:text-[2.5rem] lg:h-[3.2rem] my-auto">
          {drinkDetails.strDrink}
        </div>
        <div className="text-label text-[.9rem] h-[1rem] lg:text-[1rem] flex items-center text-center">
          <div>
            {drinkDetails.ingredients.length} Ingredients • Suggested when{" "}
            <GradientText
              color1={interpolateColor(averageSentimentScoreSuggested)}
              color2={interpolateColor(averageSentimentScoreSuggested)}
            >
              {getSentimentLabel(averageSentimentScoreSuggested)}
            </GradientText>
          </div>
        </div>
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
