import { useState, useEffect } from "react";
import AnimatedNumber from "./AnimatedNumber";
import BarArticleList from "./BarArticleList";

const BarArticlesReview: React.FC = () => {
  const [numArticles, setNumArticles] = useState(0);
  const [numSources, setNumSources] = useState(0);

  useEffect(() => {
    setNumArticles(15);
    setNumSources(2);
  }, []);

  return (
    <>
      <div className="font-semibold">
        <div className="flex justify-between">
          <div className="text-[2.5rem] h-[3.2rem]">Articles from the Day</div>
        </div>
        <div className="text-label">
          <div className="flex">
            <span style={{ marginRight: "4px" }}>
              <AnimatedNumber value={numArticles} color={false} />
            </span>
            {` Articles • `}
            <span style={{ marginRight: "4px", marginLeft: "4px" }}>
              <AnimatedNumber value={numSources} color={false} />
            </span>
            {` Sources`}
          </div>
        </div>
      </div>
      <div className="pt-5 pb-[150px]">
        <BarArticleList />
      </div>
    </>
  );
};

export default BarArticlesReview;
