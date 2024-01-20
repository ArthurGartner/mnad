import BarDrinkHeroSummary from "./BarDrinkHeroSummary";
import DrinkTitle from "./DrinkTitle";

export default function BarDrinkHeroText() {
  return (
    <>
      <DrinkTitle drinkInfo={{ abv: 30, liked: 88 }} />
      <BarDrinkHeroSummary />
    </>
  );
}
