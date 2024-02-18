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
        <div className="text-start text-label-sm md:text-[1.2rem] md:h-[1.4rem] lg:text-[1.5rem] lg:h-[1.6rem] xl:text-[1.6rem] xl:h-[1.8rem] text-label font-semibold mb-[-5rem] md:mb-[-7rem] lg:mb-[-8rem] xl:mb-[-10rem] py-5 xl:py-[4rem]">
          Calculated Sentiment Score
        </div>
        <div>
          <div className="text-[13rem] md:text-[20rem] lg:text-[25rem] font-semibold">
            <AnimatedNumber value={value || 0} />
          </div>
        </div>
      </div>
    </>
  );
};

export default BarDrinkSentimentValue;
