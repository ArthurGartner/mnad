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
        <div className="flex font-semibold items-end">
          <div className="text-[120px] h-[137px] w-[350px] mr-[20px] leading-tight text-right">
            <AnimatedNumber value={percent} plus={true} />
          </div>
          <div className="text-[70px] leading-tight">{category}</div>
        </div>
      </div>
    </>
  );
};

export default BarDayAnalyticsCategory;
