import { monthArray } from "~/util/constants";
import DirectionalButton from "./DirectionalButton";
import { formatDate } from "~/util/helperfunctions";

interface BarDateSelectProps {
  day: Date;
}

const BarDateSelect: React.FC<BarDateSelectProps> = ({ day }) => {
  return (
    <>
      <div className=" w-[90vw] md:w-[70vw] xl:w-[800px] h-[50px] lg:h-[75px] xl:h-[100px] bg-slate-200 bg-opacity-90 lg:bg-opacity-35 backdrop-blur-md fixed left-1/2 transform -translate-x-1/2 bottom-5 rounded-full shadow-lg z-50">
        <div className="flex justify-between items-center h-full">
          <div>
            <DirectionalButton direction="left" />
          </div>
          <div className="text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] xl:text-5xl font-semibold text-neutral-500">
            {formatDate(day)}
          </div>
          <div>
            <DirectionalButton direction="right" />
          </div>
        </div>
      </div>
    </>
  );
};

export default BarDateSelect;
