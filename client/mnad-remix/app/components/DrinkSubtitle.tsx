import { TiStarFullOutline } from "react-icons/ti";
import AnimatedCaret from "./AnimatedCaret";

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
    <div className="flex">
      {`${abv}`}% ABV{" "}
      <span className="ml-1">
        <AnimatedCaret value={abvDelta} />
      </span>{" "}
      {abvDelta}% • {liked}%{" "}
      <span>
        <TiStarFullOutline className="text-balancedYellow-light h-full mx-1" />
      </span>{" "}
      • Suggested {suggestedCount} Times
    </div>
  );
};

export default DrinkSubtitle;
