import AnimatedNumber from "./AnimatedNumber";

interface BarDrinkSentimentValueProps {
  value: number;
}

const BarDrinkSentimentValue: React.FC<BarDrinkSentimentValueProps> = ({
  value,
}) => {
  return (
    <>
      <div className="flex-col w-full items-end">
        <div className="text-start text-label-size text-label font-semibold mb-[-10rem]">
          Calculated Sentiment Score
        </div>
        <div>
          <div className="text-[30rem] font-semibold">
            <AnimatedNumber value={value || 0} />
          </div>
        </div>
      </div>
    </>
  );
};

export default BarDrinkSentimentValue;
