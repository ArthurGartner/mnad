import ArticleRating from "./ArticleRating";

const ArticleItem: React.FC = () => {
  return (
    <>
      <div className="h-[300px] w-full rounded-xl">
        <div className="h-full py-[15px] flex">
          <div className="h-full">
            <div className="h-[270px] w-[270px] mr-[25px] bg-label rounded-3xl"></div>
          </div>
          <div className="h-full w-full">
            <div className="flex flex-col justify-between h-full w-full">
              <div>
                <div className="font-semibold">
                  <div className="text-[3rem]">Test</div>
                  <div className="text-[1.5rem] mt-[-5px] text-label">
                    Bing News • January 30, 2024
                  </div>
                </div>

                <div>Text Content Here</div>
              </div>
              <div className="w-full text-end">
                <ArticleRating />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleItem;
