import BarDrinkHeroPic from "./BarDrinkHeroPic";
import BarDrinkHeroText from "./BarDrinkHeroText";

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
      <div className="flex h-[40vh] relative z-10">
        <div className="w-3/5 flex items-center justify-center">
          <div className="flex">
            <div>
              <BarDrinkHeroText
                openIngredients={openIngredients}
                openDidYouKnow={openDidYouKnow}
              />
            </div>
          </div>
        </div>
        <BarDrinkHeroPic />
      </div>
    </>
  );
};

export default BarDrinkHero;
