import { DrinkDetails } from "~/util/types";
import GPTTrainer from "./GPTTrainer";

interface ModalDidYouKnowProps {
  drinkDetails: DrinkDetails;
}

const ModalDidYouKnow: React.FC<ModalDidYouKnowProps> = ({ drinkDetails }) => {
  const yearInvented = 1941;
  const originLocation = "United States";

  return (
    <>
      <div className="w-[75vw] md:w-[50vw] max-h-[80vh] font-semibold overflow-hidden bg-white">
        <div className="pb-5">
          <div className="text-label text-label-sm h-[1.2rem] md:text-[1.2rem] md:h-[1.4rem] lg:text-[1.6rem] lg:h-[1.8rem]">
            Did You Know?
          </div>
          <div className="text-[1.6rem] h-[2rem] lg:text-[2.5rem] lg:h-[3.2rem] my-auto">
            {drinkDetails.strDrink}
          </div>
          <div className="text-label text-[1rem] h-[.8rem] lg:text-[1rem] flex items-center text-center">
            <div>XXXX • XXXXXXXXXXXXXXX</div>
          </div>
        </div>
        <div className="overflow-y-auto max-h-[35vh] font-normal">
          {drinkDetails.drinkFact}
        </div>
        <div className="mt-2 flex justify-end">
          <GPTTrainer />
        </div>
      </div>
    </>
  );
};

export default ModalDidYouKnow;
