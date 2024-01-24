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
        <div className="flex font-semibold">
          <div className="text-[120px] leading-tight">
            <AnimatedNumber value={percent} />
          </div>
          <div className="text-[70px] leading-tight">{category}</div>
        </div>
      </div>
    </>
  );
};

export default BarDayAnalyticsCategory;
