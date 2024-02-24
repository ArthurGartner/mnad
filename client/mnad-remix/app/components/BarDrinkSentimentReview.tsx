import { useEffect, useState } from "react";
import BarDrinkSentimentValue from "./BarDrinkSentimentValue";
import BarSentimentBar from "./BarSentimentBar";
import BarSentimentLabel from "./BarSentimentLabel";
import bgIcon from "~/assets/bg_vector_1.svg";

interface BarDinkSentimentReviewProps {
  sentimentValue: number;
  articleCount: number;
}

const BarDinkSentimentReview: React.FC<BarDinkSentimentReviewProps> = ({
  sentimentValue,
  articleCount,
}) => {
  return (
    <div>
      <div className="2xl:flex relative mb-[-10rem] h-fit">
        <div className="2xl:w-3/5 z-10 overflow-hidden">
          <BarDrinkSentimentValue value={sentimentValue} />
        </div>
        <div className="flex w-full items-center justify-end z-10">
          <BarSentimentLabel
            sentimentValue={sentimentValue}
            articleCount={articleCount}
          />
        </div>
        <img
          src={bgIcon}
          className="hidden md:block lg:hidden absolute right-0 bottom-[7vh] scale-[1.4] z-[-1]"
        />
        <img
          src={bgIcon}
          className="hidden lg:block absolute right-0 bottom-[15vh] scale-[2.2] z-[-1]"
        />
      </div>
      <div className="py-5 mt-[11rem]">
        <BarSentimentBar value={sentimentValue} />
      </div>
    </div>
  );
};

export default BarDinkSentimentReview;
