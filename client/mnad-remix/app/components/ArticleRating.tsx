import { IoMdThumbsDown, IoMdThumbsUp } from "react-icons/io";

const ArticleRating: React.FC = () => {
  return (
    <>
      <div className="flex justify-end">
        <div className="bg-neutral-200 py-2 px-5 rounded-full inline font-semibold">
          <div className="flex">
            <div className="mr-4 text-[1.5rem] text-red-400">
              Sentiment Score: 5
            </div>
            <div className="flex text-label">
              <IoMdThumbsUp className="m-auto h-[25px] w-[25px] mr-3" />
              <IoMdThumbsDown className="m-auto h-[25px] w-[25px]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleRating;
