import BarDrinkSentimentValue from "./BarDrinkSentimentValue";
import BarSentimentBar from "./BarSentimentBar";
import BarSentimentLabel from "./BarSentimentLabel";
import bgIcon from "~/assets/bg_vector_1.svg";

export default function BarDinkSentimentReview() {
  return (
    <div>
      <div className="flex relative">
        <div className="w-3/5 z-10">
          <BarDrinkSentimentValue />
        </div>
        <div className="flex w-full items-center justify-end z-10">
          <BarSentimentLabel />
        </div>
        <img
          src={bgIcon}
          className="absolute right-0 bottom-[15vh] scale-[2.2] z-[-1]"
        />
      </div>
      <div className="py-[50px]">
        <BarSentimentBar value={40} />
      </div>
    </div>
  );
}
