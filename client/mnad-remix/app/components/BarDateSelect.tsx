import DirectionalButton from "./DirectionalButton";

const BarDateSelect: React.FC = () => {
  return (
    <>
      <div className=" w-[90vw] md:w-[70vw] lg:w-[800px] h-[50px] lg:h-[100px] bg-slate-200 bg-opacity-90 lg:bg-opacity-35 backdrop-blur-md fixed left-1/2 transform -translate-x-1/2 bottom-3 rounded-full shadow-lg">
        <div className="flex justify-between items-center h-full">
          <div>
            <DirectionalButton direction="left" />
          </div>
          <div className="text-[1.5rem] md:text-[2rem] lg:text-5xl font-semibold text-neutral-500">
            January 30, 2024
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
