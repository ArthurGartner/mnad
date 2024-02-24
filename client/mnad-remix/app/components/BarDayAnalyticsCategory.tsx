import AnimatedCaret from "./AnimatedCaret";
import AnimatedNumber from "./AnimatedNumber";

interface BarDayAnalyticsCategoryProps {
  category: string;
  percent: number;
}

const BarDayAnalyticsCategory: React.FC<BarDayAnalyticsCategoryProps> = ({
  category,
  percent,
}) => {
  return (
    <>
      <div>
        <div className="flex font-semibold items-end px-5 md:px-0">
          <div className="text-[5rem] h-[5.4rem] w-[120px] mr-[40px] md:mr-[20px] md:w-[130px] xl:text-[120px] xl:h-[137px] xl:w-[250px] leading-tight flex">
            <AnimatedCaret value={percent} />
            <AnimatedNumber
              value={percent}
              abs={true}
              binary={true}
              color={false}
            />
          </div>
          <div className="text-[1.8rem] md:text-[1.8rem] lg:text-[2rem] xl:text-[2.7rem] 2xl:text-[3.3rem] leading-tight">
            {category}
          </div>
        </div>
      </div>
    </>
  );
};

export default BarDayAnalyticsCategory;
