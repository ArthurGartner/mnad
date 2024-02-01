import BarDrinkHeroSummary from "./BarDrinkHeroSummary";
import Button from "./Button";
import DrinkTitle from "./DrinkTitle";

interface BarDrinkHeroTextProps {
  openIngredients: () => void;
}

const BarDrinkHeroText: React.FC<BarDrinkHeroTextProps> = ({
  openIngredients,
}) => {
  const handleButtonClick = () => {
    console.log("Button clicked");
  };

  return (
    <>
      <DrinkTitle drinkInfo={{ abv: 30, liked: 88 }} />
      <div className="py-5">
        <BarDrinkHeroSummary />
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
          onClick={handleButtonClick}
          variant="secondary"
        />
      </div>
    </>
  );
};

export default BarDrinkHeroText;
