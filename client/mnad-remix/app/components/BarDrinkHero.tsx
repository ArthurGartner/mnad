import { ApiData, DrinkDetails, GlassDetails } from "~/util/types";
import BarDrinkHeroPic from "./BarDrinkHeroPic";
import BarDrinkHeroSummary from "./BarDrinkHeroSummary";
import Button from "./Button";
import DrinkTitle from "./DrinkTitle";
import bgIcon from "~/assets/bg_vector_1.svg";

interface BarDrinkHeroProps {
  openIngredients: () => void;
  openDidYouKnow: () => void;
  drinkDetails: DrinkDetails;
  drinkGlass: GlassDetails;
}

const BarDrinkHero: React.FC<BarDrinkHeroProps> = ({
  openIngredients,
  openDidYouKnow,
  drinkDetails,
  drinkGlass,
}) => {
  return (
    <>
      <div className="md:flex xl:h-[40vh] relative">
        <div className="lg:w-7/12 flex md:items-center md:justify-center w-full relative">
          <div className="w-full">
            <div className="w-full">
              <DrinkTitle drinkDetails={drinkDetails} />
            </div>
            <div className="md:hidden w-full">
              <BarDrinkHeroPic
                drinkGlass={drinkGlass}
                drinkDetails={drinkDetails}
              />
            </div>
            <img
              src={bgIcon}
              className="md:hidden absolute right-0 top-[20vh] scale-[1.5] z-[-1]"
            />
            <div className="py-5">
              <div className="p-5 md:p-0 shadow-lg md:shadow-none bg-teal-50 md:bg-transparent rounded-lg border-5 border-neutral-100 md:border-none">
                <BarDrinkHeroSummary summary={drinkDetails.drinkSummary} />
              </div>
            </div>
            <div className="flex">
              <div className="mr-2">
                <Button
                  label="Make Your Own"
                  onClick={openIngredients}
                  variant="primary"
                />
              </div>
              <Button
                label="Did You Know?"
                onClick={openDidYouKnow}
                variant="secondary"
              />
            </div>
          </div>
        </div>
        <div className="hidden md:block w-3/5">
          <BarDrinkHeroPic
            drinkGlass={drinkGlass}
            drinkDetails={drinkDetails}
          />
        </div>
      </div>
    </>
  );
};

export default BarDrinkHero;
