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
      <div className="md:flex lg:h-[40vh] relative z-10">
        <div className="md:w-3/5 flex items-center justify-center">
          <div>
            <BarDrinkHeroText
              openIngredients={openIngredients}
              openDidYouKnow={openDidYouKnow}
            />
          </div>
        </div>
        <BarDrinkHeroPic />
      </div>
    </>
  );
};

export default BarDrinkHero;
