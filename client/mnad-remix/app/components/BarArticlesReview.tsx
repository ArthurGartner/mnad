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
      <div className="font-semibold py-5">
        <div className="flex justify-between">
          <div className="text-[1.6rem] h-[2rem] md:text-[2.5rem] md:h-[3.2rem] my-auto">
            Articles from the Day
          </div>
        </div>
        <div className="text-label text-[.9rem] h-[.8rem]">
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
      <div className="pb-[150px]">
        <BarArticleList />
      </div>
    </>
  );
};

export default BarArticlesReview;
