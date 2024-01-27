import { useState, useEffect } from "react";
import TextValueChangeAnimation from "./AnimatedTextChange";
import TextAppearAnimation from "./TextAppearAnimation";

const BarSentimentLabel: React.FC = () => {
  const [sentimentLabel, setSentimentLabel] = useState("Gloomy");

  useEffect(() => {
    const delayed = async () => {
      await new Promise((resolve) => setTimeout(resolve, 10000));
    };

    delayed().then(() => {
      setSentimentLabel("Happy");
    });
  }, []);

  return (
    <>
      <div className="text-end font-semibold">
        <div className="text-[10rem]">
          <TextAppearAnimation
            text={sentimentLabel}
            delay={0}
            key={sentimentLabel}
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
