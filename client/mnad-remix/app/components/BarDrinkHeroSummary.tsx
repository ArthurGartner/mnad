import { RiRobot2Line } from "react-icons/ri";
import GPTTrainer from "./GPTTrainer";

interface BarDrinkHeroSummaryProps {
  summary: string;
}

const BarDrinkHeroSummary: React.FC<BarDrinkHeroSummaryProps> = ({
  summary,
}) => {
  return (
    <>
      <div className="">{summary}</div>
      <div className="mt-2 flex justify-end">
        <GPTTrainer />
      </div>
    </>
  );
};

export default BarDrinkHeroSummary;
