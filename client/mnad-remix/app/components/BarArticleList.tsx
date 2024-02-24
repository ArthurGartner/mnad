import { Article } from "~/util/types";
import ArticleItem from "./ArticleItem";

interface BarArticleListProps {
  articles: Article[];
}

const BarArticleList: React.FC<BarArticleListProps> = ({ articles }) => {
  return (
    <>
      <ul className="space-y-3">
        {articles.map((article, index) => (
          <li key={index}>
            <ArticleItem article={article} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default BarArticleList;
