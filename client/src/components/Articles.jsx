import React from "react";
import { Header } from "../components";
import ArticleList from "./ArticleList";

const Articles = () => {
  return (
    <>
      <div>
        <Header
          Title="Articles"
          Subtitle="Top articles derived from the selected day used for sentiment analysis"
        />
        <div>
          <ArticleList />
        </div>
      </div>
    </>
  );
};

export default Articles;
