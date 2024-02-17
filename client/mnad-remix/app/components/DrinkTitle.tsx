import { Drink } from "~/util/types";
import LikeDislike from "./LikeDislike";

type DrinkTitleProps = {
  drinkInfo: Drink;
};

//Need to calculate day difference here server side

export default function DrinkTitle({ drinkInfo }: DrinkTitleProps) {
  return (
    <>
      <div className="font-semibold">
        <div className="text-label text-[1.2rem] h-[1.2rem] md:text-[1.6rem] md:h-[1.8rem]">
          Today's Drink
        </div>
        <div className="flex justify-between items-center">
          <div className="text-[1.6rem] h-[2rem] md:text-[2.5rem] md:h-[3.2rem] my-auto">
            Moscow Mule
          </div>
          <div className="my-auto">
            <LikeDislike />
          </div>
        </div>
        <div className="text-label text-[.75rem] h-[.8rem]">
          <div>
            {`${drinkInfo.abv}`}% ABV ICON 3% • {`${drinkInfo.liked}`}% Liked •
            Recommended 27 Times
          </div>
        </div>
      </div>
    </>
  );
}
