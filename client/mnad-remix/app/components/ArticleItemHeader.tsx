interface ArticleItemHeaderProps {
  title: string;
  publisher: string;
}

const ArticleItemHeader: React.FC<ArticleItemHeaderProps> = ({
  title,
  publisher,
}) => {
  return (
    <div className="font-semibold">
      <div className="text-label">{publisher}</div>
      <div className="text-[1.2rem] two-line-text">{title}</div>
    </div>
  );
};

export default ArticleItemHeader;
