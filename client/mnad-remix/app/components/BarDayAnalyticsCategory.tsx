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
          <div className="text-[5rem] h-[5.4rem] w-[100px] mr-[20px] md:text-[120px] md:h-[137px] md:w-[350px] md:mr-[100px] leading-tight text-right justify-end flex">
            <AnimatedCaret value={percent} />
            <AnimatedNumber
              value={percent}
              abs={true}
              binary={true}
              color={false}
            />
          </div>
          <div className="text-[2rem] md:text-[70px] leading-tight">
            {category}
          </div>
        </div>
      </div>
    </>
  );
};

export default BarDayAnalyticsCategory;
