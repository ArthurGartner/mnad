import { TiStarFullOutline } from "react-icons/ti";
import { IoMdThumbsDown } from "react-icons/io";
import AnimatedButton from "./AnimatedButton";
import colors from "~/styles/colors";

const LikeDislike: React.FC = ({}) => {
  return (
    <>
      <div className="flex">
        {/* <div className="bg-gray-200 rounded-3xl mr-1">
          <TiStarFullOutline className="m-2 h-[25px] w-[25px] text-gray-50" />
        </div>
        <div className="bg-gray-200 rounded-3xl ml-1">
          <IoMdThumbsDown className="m-2 h-[25px] w-[25px] text-gray-50" />
        </div> */}
        <AnimatedButton
          iconColor={colors.favoriteYellow}
          bgColor={colors.backgroundLight}
          icon={<TiStarFullOutline />}
        />
        <AnimatedButton
          iconColor={colors.disagreeRed}
          bgColor={colors.backgroundLight}
          icon={<IoMdThumbsDown />}
        />
      </div>
    </>
  );
};

export default LikeDislike;
