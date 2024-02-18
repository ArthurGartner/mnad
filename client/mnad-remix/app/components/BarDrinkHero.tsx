import BarDrinkHeroPic from "./BarDrinkHeroPic";
import BarDrinkHeroSummary from "./BarDrinkHeroSummary";
import Button from "./Button";
import DrinkTitle from "./DrinkTitle";
import bgIcon from "~/assets/bg_vector_1.svg";

interface BarDrinkHeroProps {
  openIngredients: () => void;
  openDidYouKnow: () => void;
}

const BarDrinkHero: React.FC<BarDrinkHeroProps> = ({
  openIngredients,
  openDidYouKnow,
}) => {
  return (
    <>
      <div className="md:flex xl:h-[40vh] relative">
        <div className="lg:w-7/12 flex md:items-center md:justify-center w-full relative">
          <div className="w-full">
            <div className="w-full">
              <DrinkTitle drinkInfo={{ abv: 30, liked: 88 }} />
            </div>
            <div className="md:hidden w-full">
              <BarDrinkHeroPic />
            </div>
            <img
              src={bgIcon}
              className="md:hidden absolute left-0 top-[20vh] scale-[1.5] z-[-1]"
            />
            <div className="py-5">
              <div className="p-5 md:p-0 shadow-lg md:shadow-none bg-teal-50 md:bg-transparent rounded-lg border-5 border-neutral-100 md:border-none">
                <BarDrinkHeroSummary />
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
          <BarDrinkHeroPic />
        </div>
      </div>
    </>
  );
};

export default BarDrinkHero;
