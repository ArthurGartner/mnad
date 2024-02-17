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
      <div className="w-full md:flex">
        <div className="md:w-1/2 relative">
          <img
            src={bgIcon}
            className="absolute md:left-0 bottom[-12vh] md:bottom-[-25vh] scale-[1.3] md:scale-[2.2] z-[-1]"
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
