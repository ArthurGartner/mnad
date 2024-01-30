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
        <div className="text-label text-[1.6rem] h-[1.8rem]">Today's Drink</div>
        <div className="flex justify-between">
          <div className="text-[2.5rem] h-[3.2rem]">Moscow Mule</div>
          <div className="my-auto">
            <LikeDislike />
          </div>
        </div>
        <div className="text-label">
          <div>
            {`${drinkInfo.abv}`}% ABV ICON 3% • {`${drinkInfo.liked}`}% Liked •
            Recommended 27 Times
          </div>
        </div>
      </div>
    </>
  );
}
