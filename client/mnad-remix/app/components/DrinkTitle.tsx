import { Drink } from "~/util/types";
import LikeDislike from "./LikeDislike";
import AnimatedCaret from "./AnimatedCaret";
import { TiStarFullOutline } from "react-icons/ti";

type DrinkTitleProps = {
  drinkInfo: Drink;
};

//Need to calculate day difference here server side

export default function DrinkTitle({ drinkInfo }: DrinkTitleProps) {
  const abvChange = 4;

  return (
    <>
      <div className="font-semibold z-50">
        <div className="text-label text-label-sm h-[1.2rem] lg:text-[1.6rem] lg:h-[1.8rem]">
          Suggested Drink
        </div>
        <div className="flex justify-between items-center">
          <div className="text-[1.6rem] h-[2rem] lg:text-[2.5rem] lg:h-[3.2rem] my-auto">
            Moscow Mule
          </div>
          <div className="my-auto">
            <LikeDislike />
          </div>
        </div>
        <div className="text-label text-[.9rem] h-[.8rem] flex items-center text-center">
          <div className="flex">
            {`${drinkInfo.abv}`}% ABV{" "}
            <span className="ml-1">
              <AnimatedCaret value={abvChange} />
            </span>{" "}
            {abvChange}% • {`${drinkInfo.liked}`}%{" "}
            <span>
              <TiStarFullOutline className="text-balancedYellow-light h-full mx-1" />
            </span>{" "}
            • Suggested 27 Times
          </div>
        </div>
      </div>
    </>
  );
}
