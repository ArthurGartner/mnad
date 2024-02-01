import DirectionalButton from "./DirectionalButton";

const BarDateSelect: React.FC = () => {
  return (
    <>
      <div className="w-[800px] h-[100px] bg-white bg-opacity-30 backdrop-blur-md fixed left-1/2 transform -translate-x-1/2 bottom-3 rounded-full shadow-md">
        <div className="flex justify-between items-center h-full">
          <div>
            <DirectionalButton direction="left" />
          </div>
          <div className="text-5xl font-semibold text-neutral-500">
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
