import { IoMdThumbsDown, IoMdThumbsUp } from "react-icons/io";
import { RiRobot2Line } from "react-icons/ri";

const ArticleRating: React.FC = () => {
  return (
    <>
      <div className="flex md:justify-end">
        <div className="bg-neutral-200 py-1 md:py-2 px-3 md:px-5 rounded-full inline font-semibold">
          <div className="flex">
            <div className="mr-4 text-red-500 text-[.9rem] h-[.8rem] flex items-center text-center my-auto">
              <RiRobot2Line className="h-[25px] w-[25px] bg-primary-light p-[5px] text-white rounded-2xl mr-[5px]" />
              <div>Sentiment Score: 5</div>
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
