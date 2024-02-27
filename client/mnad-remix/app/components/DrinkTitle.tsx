import { DrinkDetails } from "~/util/types";
import LikeDislike from "./LikeDislike";
import AnimatedCaret from "./AnimatedCaret";
import { TiStarFullOutline } from "react-icons/ti";
import SectionHeader from "./SectionHeader";
import DrinkSubtitle from "./DrinkSubtitle";

type DrinkTitleProps = {
  drinkDetails: DrinkDetails;
};

export default function DrinkTitle({ drinkDetails }: DrinkTitleProps) {
  return (
    <>
      <SectionHeader
        label="Suggested Drink"
        title={drinkDetails.strDrink}
        interaction={<LikeDislike />}
        subtitle={
          <DrinkSubtitle
            abv={drinkDetails.abv}
            abvDelta={4}
            liked={88}
            suggestedCount={20}
          />
        }
      />
    </>
  );
}
