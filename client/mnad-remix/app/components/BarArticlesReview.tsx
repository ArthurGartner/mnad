import { useState, useEffect } from "react";
import AnimatedNumber from "./AnimatedNumber";
import BarArticleList from "./BarArticleList";
import bgIcon from "~/assets/bg_vector_2.svg";
import { Article } from "~/util/types";
import StandardLabel from "./StandardLabel";
import SectionHeader from "./SectionHeader";

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
      <SectionHeader
        title="Articles from the day"
        subtitle={
          <StandardLabel
            label={
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
            }
          />
        }
      />
      <div className="pb-[150px] pt-5">
        <BarArticleList articles={articles} />
      </div>
    </>
  );
};

export default BarArticlesReview;
