import { useState, useEffect } from "react";
import TextAppearAnimation from "./TextAppearAnimation";
import { getSentimentLabel, interpolateColor } from "~/util/helperfunctions";
import GradientText from "./GradientText";

interface BarSentimentLabelProps {
  sentimentValue: number;
}

const BarSentimentLabel: React.FC<BarSentimentLabelProps> = ({
  sentimentValue,
}) => {
  const [sentimentLabel, setSentimentLabel] = useState(getSentimentLabel(0));
  const colorRange = 20;

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

  return (
    <>
      <div className="text-end font-semibold">
        <div className="text-[10rem]">
          <TextAppearAnimation
            text={sentimentLabel}
            key={sentimentLabel}
            gradient={true}
            color1={interpolateColor(sentimentValue - colorRange)}
            color2={interpolateColor(sentimentValue + colorRange)}
          />
        </div>
        <div className="text-label text-label-size">
          ICON 2% • Based on 15 Articles
        </div>
      </div>
    </>
  );
};

export default BarSentimentLabel;
