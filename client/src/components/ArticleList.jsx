import React, { useState, useEffect } from "react";
import Tag from "./Tag";
import { base_api, getDayData } from "../../util/constants";

const ArticleList = () => {
  const [articles, setArticles] = useState(null);
  const date = encodeURIComponent("08/29/2023");

  useEffect(() => {
    fetch(`${base_api}${getDayData}?date=${date}`)
      .then((response) => response.json())
      .then((data) => {
        setArticles(data.articles);
        console.log(data);
      });
  }, []);

  if (!articles) {
    return <></>;
  }

  return (
    <>
      <div className="rounded-3xl overflow-hidden bg-neutral-100 dark:bg-neutral-700 shadow-xl p-4">
        <div className="flex">
          <div className="h-[25px] w-[25px] md:h-[40px] md:w-[40px] flex justify-center align-middle">
            <img
              src="https://cdn.worldvectorlogo.com/logos/bing-2.svg"
              className="h-[20px] md:h-[30px] m-auto"
            />
          </div>
          <div className="text-lg md:text-3xl font-semibold text-black dark:text-white">
            Bing News
          </div>
        </div>
        <div>
          {articles.map((article) => (
            <a href={article.article_url} target="_blank">
              <div className="dark:hover:bg-neutral-800 hover:bg-neutral-200 rounded-3xl hover:cursor-pointer p-2">
                <div className="flex my-3 overflow-hidden">
                  <img
                    src={article?.thumbnail}
                    className="h-[100px] w-[100px] rounded-2xl m-auto mr-[10px]"
                  />
                  <div className="h-[100px]">
                    <div className="relative">
                      <div className="font-semibold text-sm md:text-xl text-black dark:text-white line-clamp-2">
                        {article.headline}
                      </div>
                    </div>

                    <div className="relative">
                      <div className="font-semibold text-xs md:text-sm text-black dark:text-white line-clamp-2">
                        {article.description}...
                      </div>
                    </div>

                    <div>
                      <div>
                        <Tag val={article.sentiment_score} />
                      </div>
                    </div>
                  </div>

                  <style jsx>{`
                    .line-clamp-2 {
                      display: -webkit-box;
                      -webkit-line-clamp: 2;
                      -webkit-box-orient: vertical;
                      overflow: hidden;
                    }
                  `}</style>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default ArticleList;