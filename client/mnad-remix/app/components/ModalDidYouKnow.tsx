import { DrinkDetails } from "~/util/types";
import GPTTrainer from "./GPTTrainer";
import SectionHeader from "./SectionHeader";

interface ModalDidYouKnowProps {
  drinkDetails: DrinkDetails;
}

const ModalDidYouKnow: React.FC<ModalDidYouKnowProps> = ({ drinkDetails }) => {
  const yearInvented = 1941;
  const originLocation = "United States";

  return (
    <>
      <div className="w-[75vw] md:w-[50vw] max-h-[80vh] overflow-hidden bg-white">
        <SectionHeader title={drinkDetails.strDrink} label="Did You Know?" />
        <div className="scrollable-modal-content max-h-[35vh] w-full font-normal pb-2">
          {drinkDetails.drinkFact}
        </div>
        <div className="flex justify-end">
          <GPTTrainer />
        </div>
      </div>
    </>
  );
};

export default ModalDidYouKnow;
