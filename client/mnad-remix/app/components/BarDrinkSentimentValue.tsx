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
        <div className="text-start text-label-sm md:text-[1.6rem] md:h-[1.8rem] text-label font-semibold mb-[-5rem] md:mb-[-10rem] py-5 md:py-5">
          Calculated Sentiment Score
        </div>
        <div>
          <div className="text-[13rem] md:text-[30rem] font-semibold">
            <AnimatedNumber value={value || 0} />
          </div>
        </div>
      </div>
    </>
  );
};

export default BarDrinkSentimentValue;
