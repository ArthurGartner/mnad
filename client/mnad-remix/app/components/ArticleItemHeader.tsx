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
      <div className="text-label md:text-[1.2rem]">{publisher}</div>
      <div className="text-[1.1rem] md:text-[1.4rem] two-line-text">
        {title}
      </div>
    </div>
  );
};

export default ArticleItemHeader;
