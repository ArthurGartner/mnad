import { useState, useEffect } from "react";
import TextAppearAnimation from "./TextAppearAnimation";
import { getSentimentLabel, interpolateColor } from "~/util/helperfunctions";
import GradientText from "./GradientText";
import { sentimentLabelColorRange } from "~/util/constants";
import AnimatedCaret from "./AnimatedCaret";

interface BarSentimentLabelProps {
  sentimentValue: number;
}

const BarSentimentLabel: React.FC<BarSentimentLabelProps> = ({
  sentimentValue,
}) => {
  const [sentimentLabel, setSentimentLabel] = useState(getSentimentLabel(0));

  // useEffect(() => {
  //   const delayed = async () => {
  //     await new Promise((resolve) => setTimeout(resolve, 10000));
  //   };

  //   delayed().then(() => {
  //     setSentimentLabel("Happy");
  //   });
  // }, []);

  useEffect(() => {
    const updateSentimentLabel = async () => {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      setSentimentLabel(getSentimentLabel(sentimentValue));
    };
    updateSentimentLabel();
  }, [sentimentValue]);

  const sentimentChange = -2;

  return (
    <>
      <div className="text-end font-semibold mt-[-5rem]">
        <div className="text-[3rem] md:text-[6rem] lg:text-[10rem]">
          <TextAppearAnimation
            text={sentimentLabel}
            key={sentimentLabel}
            gradient={true}
            color1={interpolateColor(sentimentValue - sentimentLabelColorRange)}
            color2={interpolateColor(sentimentValue + sentimentLabelColorRange)}
          />
        </div>
        <div className="text-label text-label-sm h-[1.2rem] md:text-[1.2rem] md:h-[1.4rem] lg:text-[1.6rem] lg:h-[1.8rem]">
          <AnimatedCaret value={sentimentChange} /> {Math.abs(sentimentChange)}%
          • Based on 15 Articles
        </div>
      </div>
    </>
  );
};

export default BarSentimentLabel;
