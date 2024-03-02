import { TiStarFullOutline } from "react-icons/ti";
import AnimatedCaret from "./AnimatedCaret";
import { GrLineChart } from "react-icons/gr";
import { BiSolidDrink } from "react-icons/bi";

interface DrinkSubtitleProps {
  abv: number;
  abvDelta: number;
  liked: number;
  suggestedCount: number;
}

const DrinkSubtitle: React.FC<DrinkSubtitleProps> = ({
  abv,
  abvDelta,
  liked,
  suggestedCount,
}) => {
  return (
    <div className="flex items-center space-x-[3px]">
      <div className="flex items-center">
        <BiSolidDrink className="text-blue-400 h-full mr-1" />
        <div className="flex">{abv}% ABV</div>
      </div>
      <div className="flex items-center">
        <div className="mx-1">
          <AnimatedCaret value={abvDelta} />
        </div>
        {Math.abs(abvDelta)}%
      </div>
      <div className="flex items-center">
        <span>
          <TiStarFullOutline className="text-balancedYellow-light h-full mx-1" />
        </span>
        {liked}%{" "}
      </div>
      <span>
        <GrLineChart className="text-indigo-500 h-full mx-1 mr-2" />
      </span>
      {suggestedCount} Times
    </div>
  );
};

export default DrinkSubtitle;
