import React, { useState, useEffect } from "react";
import { Header } from "../components";
import ArticleList from "./ArticleList";

const Articles = (articles) => {
  const [newsArticles, setNewsArticles] = useState(null);

  useEffect(() => {
    setNewsArticles(articles);
  }, [articles]);

  if (!newsArticles) return <></>;

  return (
    <>
      <div>
        <Header
          Title="Articles"
          Subtitle="Top articles derived from the selected day used for sentiment analysis"
        />
        <div>
          <ArticleList articles={newsArticles} />
        </div>
      </div>
    </>
  );
};

export default Articles;
