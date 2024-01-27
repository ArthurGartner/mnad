import BarDayAnalyticsList from "./BarDayAnalyticsList";
import DynamicCoconut from "./DynamicCoconut";
import bgIcon from "~/assets/bg_vector_2.svg";

interface BarDayAnalyticsProps {
  sentimentValue: number;
}

const BarDayAnalytics: React.FC<BarDayAnalyticsProps> = ({
  sentimentValue,
}) => {
  return (
    <>
      <div className="w-full flex">
        <div className="w-1/2 relative">
          <img
            src={bgIcon}
            className="absolute left-0 bottom-[-25vh] scale-[2.2] z-[-1]"
          />
          <DynamicCoconut sentimentValue={sentimentValue} />
        </div>
        <div className="flex-col my-auto">
          <BarDayAnalyticsList />
        </div>
      </div>
    </>
  );
};

export default BarDayAnalytics;
