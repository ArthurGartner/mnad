import { TiStarFullOutline } from "react-icons/ti";
import { IoMdThumbsDown } from "react-icons/io";
import AnimatedButton from "./AnimatedButton";
import colors from "~/styles/colors";
import { useState } from "react";

const LikeDislike: React.FC = ({}) => {
  const [liked, setLiked] = useState<boolean | null>(null);

  return (
    <>
      <div className="flex">
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
