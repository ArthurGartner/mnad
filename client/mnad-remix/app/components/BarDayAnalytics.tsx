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
            className="md:hidden lg:block absolute md:left-[-20vw] lg:left-[-15vw] xl:left-0 bottom[-12vh] md:bottom-[-40vh] lg:bottom-[-70vh] xl:bottom-[-25vh] scale-[1.3] md:scale-[1.4] xl:scale-[2.2] z-[-1]"
          />
          <DynamicCoconut sentimentValue={sentimentValue} />
        </div>
        <div className="md:w-1/2 flex-col my-auto overflow-hidden">
          <BarDayAnalyticsList />
        </div>
      </div>
    </>
  );
};

export default BarDayAnalytics;
