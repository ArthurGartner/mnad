import { useState, useEffect } from "react";
import AnimatedNumber from "./AnimatedNumber";
import BarArticleList from "./BarArticleList";
import bgIcon from "~/assets/bg_vector_2.svg";
import { Article } from "~/util/types";

interface BarArticlesReviewProps {
  articles: Article[];
}

const BarArticlesReview: React.FC<BarArticlesReviewProps> = ({ articles }) => {
  const [numArticles, setNumArticles] = useState(0);
  const [numSources, setNumSources] = useState(0);

  useEffect(() => {
    setNumArticles(15);
    setNumSources(2);
  }, []);

  return (
    <>
      <div className="font-semibold py-5 relative">
        <div className="flex justify-between">
          <div className="text-[1.6rem] h-[2rem] md:text-[2.5rem] md:h-[3.2rem] my-auto">
            Articles from the Day
          </div>
        </div>
        <div className="text-label text-[.9rem] lg:text-[1rem] h-[.8rem]">
          <div className="flex">
            <span style={{ marginRight: "4px" }}>
              <AnimatedNumber value={articles.length} color={false} />
            </span>
            {` Articles • `}
            <span style={{ marginRight: "4px", marginLeft: "4px" }}>
              <AnimatedNumber value={articles.length} color={false} />
            </span>
            {` Sources`}
          </div>
        </div>
        <img
          src={bgIcon}
          className="hidden md:block lg:hidden absolute left-0 top-0 scale-[1.4] z-[-1]"
        />
      </div>
      <div className="pb-[150px]">
        <BarArticleList articles={articles} />
      </div>
    </>
  );
};

export default BarArticlesReview;
