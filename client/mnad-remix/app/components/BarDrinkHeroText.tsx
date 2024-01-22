import BarDrinkHeroSummary from "./BarDrinkHeroSummary";
import Button from "./Button";
import DrinkTitle from "./DrinkTitle";

export default function BarDrinkHeroText() {
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
            label="View Ingredients"
            onClick={handleButtonClick}
            variant="primary"
          />
        </div>

        <Button
          label="Did you Know?"
          onClick={handleButtonClick}
          variant="secondary"
        />
      </div>
    </>
  );
}
