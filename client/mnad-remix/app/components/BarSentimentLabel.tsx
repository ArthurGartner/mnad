import { useState, useEffect } from "react";
import TextAppearAnimation from "./TextAppearAnimation";
import { getSentimentLabel, interpolateColor } from "~/util/helperfunctions";
import GradientText from "./GradientText";
import { sentimentLabelColorRange } from "~/util/constants";
import AnimatedCaret from "./AnimatedCaret";
import StandardLabel from "./StandardLabel";
import AnimatedNumber from "./AnimatedNumber";

interface BarSentimentLabelProps {
  sentimentValue: number;
  articleCount: number;
  sentimentDelta: number;
}

const BarSentimentLabel: React.FC<BarSentimentLabelProps> = ({
  sentimentValue,
  articleCount,
  sentimentDelta,
}) => {
  const [sentimentLabel, setSentimentLabel] = useState(getSentimentLabel(0));

  useEffect(() => {
    const updateSentimentLabel = async () => {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      setSentimentLabel(getSentimentLabel(sentimentValue));
    };
    updateSentimentLabel();
  }, [sentimentValue]);

  return (
    <>
      <div className="text-end font-semibold mt-[-5rem]">
        <div className="text-[3rem] md:text-[6rem] lg:text-[9rem]">
          <TextAppearAnimation
            text={sentimentLabel}
            key={sentimentLabel}
            gradient={true}
            color1={interpolateColor(sentimentValue - sentimentLabelColorRange)}
            color2={interpolateColor(sentimentValue + sentimentLabelColorRange)}
          />
        </div>
        <StandardLabel
          label={
            <div className="flex justify-end text-center items-center">
              <AnimatedCaret value={sentimentDelta} />
              <AnimatedNumber value={Math.abs(sentimentDelta)} color={false} />%
              • Based on {articleCount} Articles
            </div>
          }
        />
      </div>
    </>
  );
};

export default BarSentimentLabel;
