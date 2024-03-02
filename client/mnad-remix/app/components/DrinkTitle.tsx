import { DrinkDetails } from "~/util/types";
import LikeDislike from "./LikeDislike";
import AnimatedCaret from "./AnimatedCaret";
import { TiStarFullOutline } from "react-icons/ti";
import SectionHeader from "./SectionHeader";
import DrinkSubtitle from "./DrinkSubtitle";

type DrinkTitleProps = {
  drinkDetails: DrinkDetails;
  prevDrinkAbv: number;
};

export default function DrinkTitle({
  drinkDetails,
  prevDrinkAbv,
}: DrinkTitleProps) {
  console.log(drinkDetails.abv - (prevDrinkAbv ? prevDrinkAbv : 0));

  return (
    <>
      <SectionHeader
        label="Suggested Drink"
        title={drinkDetails.strDrink}
        interaction={<LikeDislike />}
        subtitle={
          <DrinkSubtitle
            abv={drinkDetails.abv}
            abvDelta={drinkDetails.abv - (prevDrinkAbv ? prevDrinkAbv : 0)}
            liked={88}
            suggestedCount={20}
          />
        }
      />
    </>
  );
}
