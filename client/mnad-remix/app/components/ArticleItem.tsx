import { formatDate, interpolateColor } from "~/util/helperfunctions";
import ArticleRating from "./ArticleRating";
import { useState } from "react";
import DynamicCoconut from "./DynamicCoconut";
import { motion } from "framer-motion";
import AutoGeneratedTrainer from "./AutoGeneratedTrainer";
import { Article } from "~/util/types";

interface ArticleItemProps {
  article: Article;
}

const ArticleItem: React.FC<ArticleItemProps> = ({ article }) => {
  const [date, setDate] = useState(new Date());

  const newsSource: string = "Bing News";

  const sentimentColor: React.CSSProperties = {
    color: interpolateColor(article.sentiment_score),
  };

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="h-[150px] md:h-[200px] w-full rounded-md md:rounded-3xl bg-teal-50 shadow-xl px-3 cursor-pointer"
      >
        <div className="h-full py-[15px] flex">
          <div className="h-full mr-[10px] md:mr-0">
            <div className="h-[120px] w-[120px] md:h-[170px] md:w-[170px] mr-[5px] md:mr-[25px] rounded-md md:rounded-3xl overflow-hidden">
              {article.thumbnail && (
                <img
                  className="object-cover h-full w-full"
                  src={article.thumbnail}
                />
              )}
              {!article.thumbnail && (
                <DynamicCoconut sentimentValue={article.sentiment_score} />
              )}
            </div>
          </div>
          <div className="h-full w-full">
            <div className="flex flex-col justify-between h-full w-full overflow-hidden">
              <div>
                <div className="font-semibold">
                  <div className="text-[1.2rem] h-[1.6rem] md:text-[2.1rem] md:h-[2.8rem] my-auto one-line-text">
                    {article.headline}
                  </div>
                  <div className="text-label text-[.9rem] h-[.8rem] flex items-center text-center">
                    {newsSource} • {formatDate(date)}
                  </div>
                </div>
                {/* Apply the 'two-line-text' class to limit the text to two lines */}
                <div className="grow two-line-text">{article.description}</div>
              </div>
              <div className="w-full flex justify-end">
                <AutoGeneratedTrainer
                  label={`Sentiment: ${article.sentiment_score}`}
                  tailwindClasses="font-semibold"
                  labelStyle={sentimentColor}
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ArticleItem;
