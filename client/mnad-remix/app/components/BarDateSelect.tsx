import DirectionalButton from "./DirectionalButton";

const BarDateSelect: React.FC = () => {
  return (
    <>
      <div className=" w-[90vw] md:w-[800px] h-[50px] md:h-[100px] bg-slate-200 bg-opacity-90 md:bg-opacity-35 backdrop-blur-md fixed left-1/2 transform -translate-x-1/2 bottom-3 rounded-full shadow-lg">
        <div className="flex justify-between items-center h-full">
          <div>
            <DirectionalButton direction="left" />
          </div>
          <div className="text-[1.5rem] md:text-5xl font-semibold text-neutral-500">
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
